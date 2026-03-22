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
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'

const ProcessStepForm = (props) => {
  const formMethods = useForm({
    defaultValues: {
      title: props.processStep?.title || '',
      description: props.processStep?.description || '',
      icon: props.processStep?.icon || '',
      order: props.processStep?.order ?? 0,
      isActive: props.processStep?.isActive ?? true,
    },
  })

  useEffect(() => {
    formMethods.reset({
      title: props.processStep?.title || '',
      description: props.processStep?.description || '',
      icon: props.processStep?.icon || '',
      order: props.processStep?.order ?? 0,
      isActive: props.processStep?.isActive ?? true,
    })
  }, [props.processStep, formMethods])

  const onSubmit = (data) => {
    props.onSave(
      {
        title: data.title,
        description: data.description,
        icon: data.icon,
        order: Number(data.order) || 0,
        isActive: Boolean(data.isActive),
      },
      props.processStep?.id
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

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextAreaField
          name="description"
          rows={4}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="icon"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Icon
        </Label>
        <TextField
          name="icon"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="icon" className="rw-field-error" />

        <Label
          name="order"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
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

export default ProcessStepForm
