import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import {
  CheckboxField,
  FieldError,
  Form,
  FormError,
  Label,
  NumberField,
  SelectField,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'

const FAQ_CATEGORIES = ['General', 'Pricing', 'Technical', 'Process']

const FaqForm = (props) => {
  const formMethods = useForm({
    defaultValues: {
      question: props.faq?.question ?? '',
      answer: props.faq?.answer ?? '',
      category: props.faq?.category ?? 'General',
      order: props.faq?.order ?? 0,
      isActive: props.faq?.isActive ?? true,
    },
  })

  useEffect(() => {
    if (props.faq) {
      formMethods.reset({
        question: props.faq.question,
        answer: props.faq.answer,
        category: props.faq.category,
        order: props.faq.order,
        isActive: props.faq.isActive,
      })
    }
  }, [props.faq, formMethods])

  const onSubmit = (data) => {
    props.onSave(
      {
        question: data.question.trim(),
        answer: data.answer.trim(),
        category: data.category,
        order: Number(data.order),
        isActive: Boolean(data.isActive),
      },
      props.faq?.id
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
          name="question"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Question
        </Label>
        <TextField
          name="question"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="question" className="rw-field-error" />

        <Label
          name="answer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Answer
        </Label>
        <TextAreaField
          name="answer"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="answer" className="rw-field-error" />

        <Label
          name="category"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category
        </Label>
        <SelectField
          name="category"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        >
          {FAQ_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </SelectField>
        <FieldError name="category" className="rw-field-error" />

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

export default FaqForm
