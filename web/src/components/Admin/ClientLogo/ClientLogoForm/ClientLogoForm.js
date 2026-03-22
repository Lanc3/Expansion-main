import { useEffect } from 'react'

import { useForm } from 'react-hook-form'

import {
  CheckboxField,
  FieldError,
  Form,
  FormError,
  Label,
  NumberField,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const ClientLogoForm = (props) => {
  const formMethods = useForm({
    defaultValues: {
      name: props.clientLogo?.name || '',
      logoUrl: props.clientLogo?.logoUrl || '',
      websiteUrl: props.clientLogo?.websiteUrl || '',
      order: props.clientLogo?.order ?? 0,
      isActive: props.clientLogo?.isActive ?? true,
    },
  })

  useEffect(() => {
    formMethods.reset({
      name: props.clientLogo?.name || '',
      logoUrl: props.clientLogo?.logoUrl || '',
      websiteUrl: props.clientLogo?.websiteUrl || '',
      order: props.clientLogo?.order ?? 0,
      isActive: props.clientLogo?.isActive ?? true,
    })
  }, [props.clientLogo, formMethods])

  const onSubmit = (data) => {
    const website = data.websiteUrl?.trim()
    props.onSave(
      {
        name: data.name,
        logoUrl: data.logoUrl,
        websiteUrl: website || null,
        order: Number(data.order) || 0,
        isActive: Boolean(data.isActive),
      },
      props.clientLogo?.id
    )
  }

  return (
    <div className="rw-form-wrapper">
      <Form formMethods={formMethods} onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label name="name" className="rw-label" errorClassName="rw-label rw-label-error">
          Name
        </Label>
        <TextField
          name="name"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label name="logoUrl" className="rw-label" errorClassName="rw-label rw-label-error">
          Logo URL
        </Label>
        <TextField
          name="logoUrl"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="logoUrl" className="rw-field-error" />

        <Label name="websiteUrl" className="rw-label" errorClassName="rw-label rw-label-error">
          Website URL
        </Label>
        <TextField
          name="websiteUrl"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          placeholder="Optional"
        />
        <FieldError name="websiteUrl" className="rw-field-error" />

        <Label name="order" className="rw-label" errorClassName="rw-label rw-label-error">
          Order
        </Label>
        <NumberField
          name="order"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="order" className="rw-field-error" />

        <div className="rw-checkbox-group flex items-center gap-2 mt-4">
          <CheckboxField name="isActive" className="rw-checkbox" />
          <Label name="isActive" className="rw-label !mb-0">
            Active
          </Label>
        </div>
        <FieldError name="isActive" className="rw-field-error" />

        <div className="rw-button-group mt-6">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {props.loading ? 'Saving…' : 'Save'}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ClientLogoForm
