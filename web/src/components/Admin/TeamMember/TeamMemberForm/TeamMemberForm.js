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

const TeamMemberForm = (props) => {
  const formMethods = useForm({
    defaultValues: {
      name: props.teamMember?.name ?? '',
      role: props.teamMember?.role ?? '',
      bio: props.teamMember?.bio ?? '',
      image: props.teamMember?.image ?? '',
      linkedin: props.teamMember?.linkedin ?? '',
      github: props.teamMember?.github ?? '',
      email: props.teamMember?.email ?? '',
      order: props.teamMember?.order ?? 0,
      isActive: props.teamMember?.isActive ?? true,
    },
  })

  useEffect(() => {
    if (props.teamMember) {
      formMethods.reset({
        name: props.teamMember.name,
        role: props.teamMember.role,
        bio: props.teamMember.bio,
        image: props.teamMember.image ?? '',
        linkedin: props.teamMember.linkedin ?? '',
        github: props.teamMember.github ?? '',
        email: props.teamMember.email ?? '',
        order: props.teamMember.order,
        isActive: props.teamMember.isActive,
      })
    }
  }, [props.teamMember, formMethods])

  const onSubmit = (data) => {
    props.onSave(
      {
        name: data.name.trim(),
        role: data.role.trim(),
        bio: data.bio.trim(),
        image: emptyToUndefined(data.image),
        linkedin: emptyToUndefined(data.linkedin),
        github: emptyToUndefined(data.github),
        email: emptyToUndefined(data.email),
        order: Number(data.order),
        isActive: Boolean(data.isActive),
      },
      props.teamMember?.id
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
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role
        </Label>
        <TextField
          name="role"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="role" className="rw-field-error" />

        <Label
          name="bio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bio
        </Label>
        <TextAreaField
          name="bio"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="bio" className="rw-field-error" />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image URL
        </Label>
        <TextField
          name="image"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="image" className="rw-field-error" />

        <Label
          name="linkedin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          LinkedIn
        </Label>
        <TextField
          name="linkedin"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="linkedin" className="rw-field-error" />

        <Label
          name="github"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          GitHub
        </Label>
        <TextField
          name="github"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="github" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="email" className="rw-field-error" />

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

export default TeamMemberForm
