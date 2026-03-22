import { useForm } from 'react-hook-form'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const TechnologyForm = (props) => {
  const formMethods = useForm({
    defaultValues: {
      name: props.technology?.name ?? '',
      icon: props.technology?.icon ?? '',
      category: props.technology?.category ?? '',
      proficiency: props.technology?.proficiency ?? 'Expert',
      order: props.technology?.order ?? 0,
      isActive: props.technology?.isActive ?? true,
    },
  })

  const onSubmit = (data) => {
    const order =
      data.order === '' || data.order === undefined || Number.isNaN(Number(data.order))
        ? 0
        : Number(data.order)

    props.onSave(
      {
        name: data.name,
        icon: data.icon,
        category: data.category,
        proficiency: data.proficiency,
        order,
        isActive: Boolean(data.isActive),
      },
      props.technology?.id
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

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
          name="category"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category
        </Label>
        <TextField
          name="category"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="category" className="rw-field-error" />

        <Label
          name="proficiency"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Proficiency
        </Label>
        <TextField
          name="proficiency"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="proficiency" className="rw-field-error" />

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

export default TechnologyForm
