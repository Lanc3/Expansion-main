import { Form, FormError, FieldError, Label, Submit, TextAreaField, SelectField } from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import ErrorState from 'src/components/ErrorState/ErrorState'

export const QUERY = gql`
  query ContactSubmissionAdminQuery($id: Int!) {
    contactSubmission(id: $id) {
      id
      name
      email
      company
      phone
      budget
      timeline
      projectDescription
      serviceInterest
      howFound
      status
      notes
      createdAt
      updatedAt
    }
  }
`

const UPDATE_MUTATION = gql`
  mutation UpdateContactSubmissionAdmin($id: Int!, $input: UpdateContactSubmissionInput!) {
    updateContactSubmission(id: $id, input: $input) {
      id
      status
      notes
      updatedAt
    }
  }
`

const STATUS_OPTIONS = [
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'qualified', label: 'Qualified' },
  { value: 'proposal_sent', label: 'Proposal sent' },
  { value: 'closed_won', label: 'Closed — won' },
  { value: 'closed_lost', label: 'Closed — lost' },
]

function formatDateTime(iso) {
  if (!iso) return '—'
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  } catch {
    return iso
  }
}

function DetailRow({ term, children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(8rem,12rem)_1fr] gap-1 sm:gap-4 py-3 border-b border-glass-border/60 last:border-0">
      <dt className="font-mono text-xs text-gray-500 uppercase tracking-wide shrink-0">{term}</dt>
      <dd className="text-gray-200 whitespace-pre-wrap break-words">{children ?? '—'}</dd>
    </div>
  )
}

export const Loading = () => <SkeletonText lines={12} />

export const Failure = ({ error }) => <ErrorState message={error?.message} />

export const Success = ({ contactSubmission }) => {
  const formMethods = useForm({
    defaultValues: {
      status: contactSubmission?.status || 'new',
      notes: contactSubmission?.notes || '',
    },
  })

  useEffect(() => {
    formMethods.reset({
      status: contactSubmission?.status || 'new',
      notes: contactSubmission?.notes || '',
    })
  }, [contactSubmission, formMethods])

  const [updateContactSubmission, { loading, error }] = useMutation(UPDATE_MUTATION, {
    onCompleted: () => toast.success('Submission updated'),
    onError: (err) => toast.error(err.message),
    refetchQueries: [
      {
        query: QUERY,
        variables: { id: contactSubmission.id },
      },
    ],
    awaitRefetchQueries: true,
  })

  const onSubmit = (data) => {
    updateContactSubmission({
      variables: {
        id: contactSubmission.id,
        input: {
          status: data.status,
          notes: data.notes,
        },
      },
    })
  }

  if (!contactSubmission) {
    return (
      <div className="glass-panel rounded-2xl p-8 text-gray-400">Submission not found.</div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-6">Submission #{contactSubmission.id}</h2>
        <dl>
          <DetailRow term="Name">{contactSubmission.name}</DetailRow>
          <DetailRow term="Email">{contactSubmission.email}</DetailRow>
          <DetailRow term="Company">{contactSubmission.company}</DetailRow>
          <DetailRow term="Phone">{contactSubmission.phone}</DetailRow>
          <DetailRow term="Budget">{contactSubmission.budget}</DetailRow>
          <DetailRow term="Timeline">{contactSubmission.timeline}</DetailRow>
          <DetailRow term="Service interest">{contactSubmission.serviceInterest}</DetailRow>
          <DetailRow term="How they found us">{contactSubmission.howFound}</DetailRow>
          <DetailRow term="Project description">{contactSubmission.projectDescription}</DetailRow>
          <DetailRow term="Status (current)">{contactSubmission.status}</DetailRow>
          <DetailRow term="Notes (current)">{contactSubmission.notes}</DetailRow>
          <DetailRow term="Created">{formatDateTime(contactSubmission.createdAt)}</DetailRow>
          <DetailRow term="Updated">{formatDateTime(contactSubmission.updatedAt)}</DetailRow>
        </dl>
      </div>

      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-white mb-4">Update status &amp; notes</h3>
        <Form
          formMethods={formMethods}
          onSubmit={onSubmit}
          error={error}
          className="rw-form-wrapper space-y-4"
        >
          <FormError
            titleClassName="rw-form-error-title"
            listClassName="rw-form-error-list"
            wrapperClassName="rw-form-error-wrapper"
          />

          <div>
            <Label name="status" className="rw-label">
              Status
            </Label>
            <SelectField
              name="status"
              className="rw-input mt-1 block w-full max-w-md"
              validation={{ required: true }}
            >
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </SelectField>
            <FieldError name="status" className="rw-field-error" />
          </div>

          <div>
            <Label name="notes" className="rw-label">
              Notes
            </Label>
            <TextAreaField
              name="notes"
              rows={5}
              className="rw-input mt-1 block w-full"
              placeholder="Internal notes…"
            />
            <FieldError name="notes" className="rw-field-error" />
          </div>

          <div>
            <Submit disabled={loading} className="rw-button rw-button-green">
              {loading ? 'Saving…' : 'Save changes'}
            </Submit>
          </div>
        </Form>
      </div>
    </div>
  )
}
