import { useForm } from 'react-hook-form'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const ServiceForm = (props) => {
  const formMethods = useForm({
    defaultValues: {
      title: props.service?.title ?? '',
      slug: props.service?.slug ?? '',
      shortDescription: props.service?.shortDescription ?? '',
      fullDescription: props.service?.fullDescription ?? '',
      icon: props.service?.icon ?? '',
      image: props.service?.image ?? '',
      order: props.service?.order ?? 0,
      isActive: props.service?.isActive ?? true,
    },
  })

  const onSubmit = (data) => {
    const order =
      data.order === '' || data.order === undefined || Number.isNaN(Number(data.order))
        ? 0
        : Number(data.order)

    props.onSave(
      {
        title: data.title,
        slug: data.slug,
        shortDescription: data.shortDescription,
        fullDescription: data.fullDescription,
        icon: data.icon,
        image: data.image?.trim() ? data.image.trim() : null,
        order,
        isActive: Boolean(data.isActive),
      },
      props.service?.id
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
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>
        <TextField
          name="slug"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="shortDescription"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Short description
        </Label>
        <TextField
          name="shortDescription"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="shortDescription" className="rw-field-error" />

        <Label
          name="fullDescription"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Full description
        </Label>
        <TextAreaField
          name="fullDescription"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="fullDescription" className="rw-field-error" />

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
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>
        <TextField
          name="image"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="image" className="rw-field-error" />

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
        />
        <FieldError name="order" className="rw-field-error" />

        <div style={{ marginBottom: '1rem' }}>
          <Label
            name="isActive"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Active
          </Label>
          <CheckboxField name="isActive" className="rw-input" />
        </div>
        <FieldError name="isActive" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ServiceForm
