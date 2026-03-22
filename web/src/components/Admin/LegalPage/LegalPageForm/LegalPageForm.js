import { useEffect } from 'react'

import { useForm } from 'react-hook-form'

import {
  CheckboxField,
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'

const LegalPageForm = (props) => {
  const formMethods = useForm({
    defaultValues: {
      slug: props.legalPage?.slug || '',
      title: props.legalPage?.title || '',
      body: props.legalPage?.body || '',
      isActive: props.legalPage?.isActive ?? true,
    },
  })

  useEffect(() => {
    formMethods.reset({
      slug: props.legalPage?.slug || '',
      title: props.legalPage?.title || '',
      body: props.legalPage?.body || '',
      isActive: props.legalPage?.isActive ?? true,
    })
  }, [props.legalPage, formMethods])

  const onSubmit = (data) => {
    props.onSave(
      {
        slug: data.slug.trim(),
        title: data.title,
        body: data.body,
        isActive: Boolean(data.isActive),
      },
      props.legalPage?.id
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

        <Label name="slug" className="rw-label" errorClassName="rw-label rw-label-error">
          Slug
        </Label>
        <TextField
          name="slug"
          className="rw-input font-mono"
          errorClassName="rw-input rw-input-error"
          placeholder="privacy-policy"
          validation={{ required: true }}
        />
        <FieldError name="slug" className="rw-field-error" />

        <Label name="title" className="rw-label" errorClassName="rw-label rw-label-error">
          Title
        </Label>
        <TextField
          name="title"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label name="body" className="rw-label" errorClassName="rw-label rw-label-error">
          Body
        </Label>
        <TextAreaField
          name="body"
          rows={18}
          className="rw-input min-h-[320px]"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="body" className="rw-field-error" />

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

export default LegalPageForm
