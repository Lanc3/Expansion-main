import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'

import AutoSaveBanner from 'src/components/AutoSaveBanner/AutoSaveBanner'
import useAutoSave from 'src/hooks/useAutoSave'

const ProjectDataForm = (props) => {
  const { hasDraft, draftTimestamp, saveDraft, loadDraft, clearDraft } =
    useAutoSave('project-form')

  const formMethods = useForm({
    defaultValues: {
      title: props.projectData?.title || '',
      category: props.projectData?.category || '',
      image: props.projectData?.image || '',
      video: props.projectData?.video || '',
      clientName: props.projectData?.clientName || '',
      clientWebsite: props.projectData?.clientWebsite || '',
      objective: props.projectData?.objective || '',
      tools: props.projectData?.tools || '',
      body: props.projectData?.body || '',
      by: props.projectData?.by || '',
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
    props.onSave(data, props?.projectData?.id)
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
          defaultValue={props.projectData?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="category"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category
        </Label>

        <TextField
          name="category"
          defaultValue={props.projectData?.category}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="category" className="rw-field-error" />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>

        <TextField
          name="image"
          defaultValue={props.projectData?.image}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="image" className="rw-field-error" />

        <Label
          name="video"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Video
        </Label>

        <TextField
          name="video"
          defaultValue={props.projectData?.video}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />

        <FieldError name="video" className="rw-field-error" />

        <Label
          name="clientName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Client name
        </Label>

        <TextField
          name="clientName"
          defaultValue={props.projectData?.clientName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="clientName" className="rw-field-error" />

        <Label
          name="clientWebsite"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Client website
        </Label>

        <TextField
          name="clientWebsite"
          defaultValue={props.projectData?.clientWebsite}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="clientWebsite" className="rw-field-error" />

        <Label
          name="objective"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Objective
        </Label>

        <TextField
          name="objective"
          defaultValue={props.projectData?.objective}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="objective" className="rw-field-error" />

        <Label
          name="tools"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tools
        </Label>

        <TextField
          name="tools"
          defaultValue={props.projectData?.tools}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="tools" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

        <TextAreaField
          name="body"
          defaultValue={props.projectData?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="body" className="rw-field-error" />

        <Label
          name="by"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          By
        </Label>

        <TextField
          name="by"
          defaultValue={props.projectData?.by}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="by" className="rw-field-error" />

        <Label
          name="challenge"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Challenge (Case Study)
        </Label>

        <TextAreaField
          name="challenge"
          defaultValue={props.projectData?.challenge}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="challenge" className="rw-field-error" />

        <Label
          name="solution"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Solution (Case Study)
        </Label>

        <TextAreaField
          name="solution"
          defaultValue={props.projectData?.solution}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="solution" className="rw-field-error" />

        <Label
          name="results"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Results (Case Study)
        </Label>

        <TextAreaField
          name="results"
          defaultValue={props.projectData?.results}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="results" className="rw-field-error" />

        <Label
          name="metrics"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Key Metrics (Case Study)
        </Label>

        <TextField
          name="metrics"
          defaultValue={props.projectData?.metrics}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="metrics" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProjectDataForm
