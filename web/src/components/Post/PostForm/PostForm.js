import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

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

import AutoSaveBanner from 'src/components/AutoSaveBanner/AutoSaveBanner'
import useAutoSave from 'src/hooks/useAutoSave'

const PostForm = (props) => {
  const { hasDraft, draftTimestamp, saveDraft, loadDraft, clearDraft } =
    useAutoSave('post-form')

  const formMethods = useForm({
    defaultValues: {
      title: props.post?.title || '',
      body: props.post?.body || '',
      likeAmount: props.post?.likeAmount || 0,
      Image: props.post?.Image || '',
    },
  })

  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const values = formMethods.getValues()
      const hasContent = values.title || values.body
      if (hasContent) {
        saveDraft(values)
      }
    }, 30000)

    return () => clearInterval(intervalRef.current)
  }, [formMethods, saveDraft])

  const handleRestore = () => {
    const draft = loadDraft()
    if (draft) {
      formMethods.reset(draft)
    }
    clearDraft()
  }

  const handleDiscard = () => {
    clearDraft()
  }

  const onSubmit = (data) => {
    clearDraft()
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <AutoSaveBanner
        hasDraft={hasDraft}
        timestamp={draftTimestamp}
        onRestore={handleRestore}
        onDiscard={handleDiscard}
      />

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
          defaultValue={props.post?.title}
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
          defaultValue={props.post?.body}
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
          defaultValue={props.post?.likeAmount}
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
          defaultValue={props.post?.Image}
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

export default PostForm
