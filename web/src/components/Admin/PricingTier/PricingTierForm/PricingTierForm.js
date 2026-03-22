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

const PricingTierForm = (props) => {
  const formMethods = useForm({
    defaultValues: {
      name: props.pricingTier?.name || '',
      description: props.pricingTier?.description || '',
      features: props.pricingTier?.features || '',
      price: props.pricingTier?.price || '',
      unit: props.pricingTier?.unit || '',
      isPopular: props.pricingTier?.isPopular ?? false,
      ctaText: props.pricingTier?.ctaText || 'Get Started',
      order: props.pricingTier?.order ?? 0,
      isActive: props.pricingTier?.isActive ?? true,
    },
  })

  useEffect(() => {
    formMethods.reset({
      name: props.pricingTier?.name || '',
      description: props.pricingTier?.description || '',
      features: props.pricingTier?.features || '',
      price: props.pricingTier?.price || '',
      unit: props.pricingTier?.unit || '',
      isPopular: props.pricingTier?.isPopular ?? false,
      ctaText: props.pricingTier?.ctaText || 'Get Started',
      order: props.pricingTier?.order ?? 0,
      isActive: props.pricingTier?.isActive ?? true,
    })
  }, [props.pricingTier, formMethods])

  const onSubmit = (data) => {
    props.onSave(
      {
        name: data.name,
        description: data.description,
        features: data.features,
        price: data.price,
        unit: data.unit,
        isPopular: Boolean(data.isPopular),
        ctaText: data.ctaText || 'Get Started',
        order: Number(data.order) || 0,
        isActive: Boolean(data.isActive),
      },
      props.pricingTier?.id
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

        <Label name="name" className="rw-label" errorClassName="rw-label rw-label-error">
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
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextAreaField
          name="description"
          rows={3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="features"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Features (comma-separated)
        </Label>
        <TextAreaField
          name="features"
          rows={4}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          placeholder="Feature one, Feature two, Feature three"
          validation={{ required: true }}
        />
        <FieldError name="features" className="rw-field-error" />

        <Label name="price" className="rw-label" errorClassName="rw-label rw-label-error">
          Price
        </Label>
        <TextField
          name="price"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="price" className="rw-field-error" />

        <Label name="unit" className="rw-label" errorClassName="rw-label rw-label-error">
          Unit
        </Label>
        <TextField
          name="unit"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          placeholder="e.g. /month"
          validation={{ required: true }}
        />
        <FieldError name="unit" className="rw-field-error" />

        <Label name="ctaText" className="rw-label" errorClassName="rw-label rw-label-error">
          CTA text
        </Label>
        <TextField
          name="ctaText"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="ctaText" className="rw-field-error" />

        <Label name="order" className="rw-label" errorClassName="rw-label rw-label-error">
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
          <CheckboxField name="isPopular" className="rw-checkbox" />
          <Label name="isPopular" className="rw-label !mb-0">
            Popular
          </Label>
        </div>
        <FieldError name="isPopular" className="rw-field-error" />

        <div className="rw-checkbox-group flex items-center gap-2 mt-2">
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

export default PricingTierForm
