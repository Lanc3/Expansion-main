import { Link, navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query AdminTeamMemberDetail($id: Int!) {
    teamMember: teamMember(id: $id) {
      id
      name
      role
      bio
      image
      linkedin
      github
      email
      order
      isActive
      createdAt
    }
  }
`

const DELETE_TEAM_MEMBER_MUTATION = gql`
  mutation AdminDeleteTeamMemberDetail($id: Int!) {
    deleteTeamMember(id: $id) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Empty = () => <EmptyState title="Team member not found" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ teamMember }) => {
  const [deleteTeamMember, { loading: deleting }] = useMutation(
    DELETE_TEAM_MEMBER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Team member deleted')
        navigate(routes.adminTeamMembers())
      },
      onError: (err) => {
        toast.error(err.message)
      },
    }
  )

  if (!teamMember) {
    return <EmptyState title="Team member not found" />
  }

  const onDelete = () => {
    if (confirm('Delete this team member?')) {
      deleteTeamMember({ variables: { id: teamMember.id } })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="rw-heading rw-heading-secondary">
          Team member #{teamMember.id}
        </h1>
        <nav className="rw-table-actions">
          <Link
            to={routes.adminTeamMembers()}
            className="rw-button rw-button-small"
          >
            Back to list
          </Link>
          <Link
            to={routes.adminEditTeamMember({ id: teamMember.id })}
            className="rw-button rw-button-small rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            disabled={deleting}
            className="rw-button rw-button-small rw-button-red"
            onClick={onDelete}
          >
            Delete
          </button>
        </nav>
      </div>

      <dl className="rw-segment rw-text-sm space-y-2">
        <div>
          <dt className="text-sm font-medium opacity-70">Name</dt>
          <dd>{teamMember.name}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Role</dt>
          <dd>{teamMember.role}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Bio</dt>
          <dd className="whitespace-pre-wrap">{teamMember.bio}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Image</dt>
          <dd>{teamMember.image || '—'}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">LinkedIn</dt>
          <dd>{teamMember.linkedin || '—'}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">GitHub</dt>
          <dd>{teamMember.github || '—'}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Email</dt>
          <dd>{teamMember.email || '—'}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Order</dt>
          <dd>{teamMember.order}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium opacity-70">Active</dt>
          <dd>{teamMember.isActive ? 'Yes' : 'No'}</dd>
        </div>
      </dl>
    </div>
  )
}
