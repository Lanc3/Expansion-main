import { useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query SiteSettingsAdminQuery {
    siteSettings {
      id
      key
      value
      group
      label
      fieldType
    }
  }
`

const BULK_UPDATE_MUTATION = gql`
  mutation BulkUpdateSiteSettingsAdmin($input: [UpdateSiteSettingInput!]!) {
    bulkUpdateSiteSettings(input: $input) {
      id
      value
    }
  }
`

function fieldNameForId(id) {
  return `setting_${id}`
}

function renderInput(setting, disabled) {
  const name = fieldNameForId(setting.id)
  const common = {
    name,
    className: 'rw-input mt-1 block w-full',
    disabled,
  }

  switch (setting.fieldType) {
    case 'textarea':
      return <TextAreaField {...common} rows={4} />
    case 'url':
      return <TextField {...common} type="url" />
    case 'text':
    default:
      return <TextField {...common} type="text" />
  }
}

function ColorSettingField({ name, disabled, control }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const pickerValue = /^#[0-9A-Fa-f]{6}$/i.test(field.value) ? field.value : '#000000'
        return (
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <input
              type="color"
              disabled={disabled}
              value={pickerValue}
              onChange={(e) => field.onChange(e.target.value)}
              className="h-10 w-14 cursor-pointer rounded border border-glass-border bg-transparent p-1"
              aria-label="Color picker"
            />
            <input
              type="text"
              disabled={disabled}
              {...field}
              className="rw-input flex-1 min-w-[8rem]"
            />
          </div>
        )
      }}
    />
  )
}

export const Loading = () => <SkeletonText lines={8} />

export const Empty = () => <EmptyState title="No site settings" description="Seed or create settings in the database." />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ siteSettings }) => {
  const grouped = useMemo(() => {
    const map = new Map()
    for (const s of siteSettings) {
      const g = s.group || 'General'
      if (!map.has(g)) map.set(g, [])
      map.get(g).push(s)
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b))
  }, [siteSettings])

  const defaultValues = useMemo(() => {
    const v = {}
    for (const s of siteSettings) {
      v[fieldNameForId(s.id)] = s.value ?? ''
    }
    return v
  }, [siteSettings])

  const formMethods = useForm({ defaultValues })

  useEffect(() => {
    formMethods.reset(defaultValues)
  }, [defaultValues, formMethods])

  const [bulkUpdateSiteSettings, { loading, error }] = useMutation(BULK_UPDATE_MUTATION, {
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
    onCompleted: () => toast.success('Settings saved'),
    onError: (err) => toast.error(err.message),
  })

  const onSubmit = (data) => {
    const changed = []
    for (const s of siteSettings) {
      const key = fieldNameForId(s.id)
      const next = data[key] ?? ''
      if (next !== (s.value ?? '')) {
        changed.push({ id: s.id, value: next })
      }
    }
    if (changed.length === 0) {
      toast('No changes to save')
      return
    }
    bulkUpdateSiteSettings({ variables: { input: changed } })
  }

  const { control } = formMethods

  return (
    <Form
      formMethods={formMethods}
      onSubmit={onSubmit}
      error={error}
      className="rw-form-wrapper space-y-8"
    >
      <FormError
        titleClassName="rw-form-error-title"
        listClassName="rw-form-error-list"
        wrapperClassName="rw-form-error-wrapper"
      />

      {grouped.map(([groupName, settings]) => (
        <section key={groupName} className="glass-panel rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white mb-6 pb-2 border-b border-glass-border">
            {groupName}
          </h2>
          <div className="space-y-5">
            {settings.map((setting) => (
              <div key={setting.id}>
                <Label name={fieldNameForId(setting.id)} className="rw-label">
                  {setting.label}
                  <span className="ml-2 text-gray-500 font-mono text-xs normal-case">({setting.key})</span>
                </Label>
                {setting.fieldType === 'color' ? (
                  <ColorSettingField
                    name={fieldNameForId(setting.id)}
                    disabled={loading}
                    control={control}
                  />
                ) : (
                  renderInput(setting, loading)
                )}
                <FieldError name={fieldNameForId(setting.id)} className="rw-field-error" />
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="glass-panel rounded-2xl p-6 sm:p-8 flex justify-end">
        <Submit disabled={loading} className="rw-button rw-button-green">
          {loading ? 'Saving…' : 'Save all changes'}
        </Submit>
      </div>
    </Form>
  )
}
