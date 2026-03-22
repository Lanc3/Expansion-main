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

const emptyToUndefined = (v) => {
  const s = typeof v === 'string' ? v.trim() : v
  return s === '' || s === undefined || s === null ? undefined : s
}

const TestimonialForm = (props) => {
  const formMethods = useForm({
    defaultValues: {
      clientName: props.testimonial?.clientName ?? '',
      clientTitle: props.testimonial?.clientTitle ?? '',
      clientCompany: props.testimonial?.clientCompany ?? '',
      clientImage: props.testimonial?.clientImage ?? '',
      quote: props.testimonial?.quote ?? '',
      rating: props.testimonial?.rating ?? 5,
      projectUrl: props.testimonial?.projectUrl ?? '',
      order: props.testimonial?.order ?? 0,
      isActive: props.testimonial?.isActive ?? true,
    },
  })

  useEffect(() => {
    if (props.testimonial) {
      formMethods.reset({
        clientName: props.testimonial.clientName,
        clientTitle: props.testimonial.clientTitle,
        clientCompany: props.testimonial.clientCompany,
        clientImage: props.testimonial.clientImage ?? '',
        quote: props.testimonial.quote,
        rating: props.testimonial.rating,
        projectUrl: props.testimonial.projectUrl ?? '',
        order: props.testimonial.order,
        isActive: props.testimonial.isActive,
      })
    }
  }, [props.testimonial, formMethods])

  const onSubmit = (data) => {
    props.onSave(
      {
        clientName: data.clientName.trim(),
        clientTitle: data.clientTitle.trim(),
        clientCompany: data.clientCompany.trim(),
        clientImage: emptyToUndefined(data.clientImage),
        quote: data.quote.trim(),
        rating: Number(data.rating),
        projectUrl: emptyToUndefined(data.projectUrl),
        order: Number(data.order),
        isActive: Boolean(data.isActive),
      },
      props.testimonial?.id
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
          name="clientName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Client name
        </Label>
        <TextField
          name="clientName"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="clientName" className="rw-field-error" />

        <Label
          name="clientTitle"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Client title
        </Label>
        <TextField
          name="clientTitle"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="clientTitle" className="rw-field-error" />

        <Label
          name="clientCompany"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Client company
        </Label>
        <TextField
          name="clientCompany"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="clientCompany" className="rw-field-error" />

        <Label
          name="clientImage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Client image URL
        </Label>
        <TextField
          name="clientImage"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="clientImage" className="rw-field-error" />

        <Label
          name="quote"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quote
        </Label>
        <TextAreaField
          name="quote"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="quote" className="rw-field-error" />

        <Label
          name="rating"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rating
        </Label>
        <NumberField
          name="rating"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true, min: 1, max: 5 }}
        />
        <FieldError name="rating" className="rw-field-error" />

        <Label
          name="projectUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Project URL
        </Label>
        <TextField
          name="projectUrl"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="projectUrl" className="rw-field-error" />

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

        <div className="rw-checkbox-group">
          <Label
            name="isActive"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Active
          </Label>
          <CheckboxField name="isActive" className="rw-input" />
        </div>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TestimonialForm
