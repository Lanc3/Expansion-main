import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'

const NicolaPostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.nicolaPost?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.nicolaPost?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

        <TextAreaField
          name="body"
          defaultValue={props.nicolaPost?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="body" className="rw-field-error" />

        <Label
          name="likeAmount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Like amount
        </Label>

        <NumberField
          name="likeAmount"
          defaultValue={props.nicolaPost?.likeAmount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="likeAmount" className="rw-field-error" />

        <Label
          name="Image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>

        <TextField
          name="Image"
          defaultValue={props.nicolaPost?.Image}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Image" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NicolaPostForm
