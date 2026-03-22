import { Link, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmptyState from 'src/components/EmptyState/EmptyState'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'
import { truncate } from 'src/lib/formatters'

export const QUERY = gql`
  query AdminTeamMembersList {
    teamMembers {
      id
      name
      role
      isActive
    }
  }
`

const DELETE_TEAM_MEMBER_MUTATION = gql`
  mutation AdminDeleteTeamMember($id: Int!) {
    deleteTeamMember(id: $id) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={5} />

export const Empty = () => (
  <EmptyState
    title="No team members yet"
    actionLabel="Add team member"
    actionTo={routes.adminNewTeamMember()}
  />
)

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ teamMembers }) => {
  const [deleteTeamMember] = useMutation(DELETE_TEAM_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('Team member deleted')
    },
    onError: (err) => {
      toast.error(err.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Delete this team member?')) {
      deleteTeamMember({ variables: { id } })
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="rw-heading rw-heading-secondary">Team members</h1>
        <Link
          to={routes.adminNewTeamMember()}
          className="rw-button rw-button-small rw-button-green"
        >
          New team member
        </Link>
      </div>

      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Active</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((row) => (
              <tr key={row.id}>
                <td>{truncate(row.name)}</td>
                <td>{truncate(row.role)}</td>
                <td>{row.isActive ? 'Yes' : 'No'}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.adminTeamMember({ id: row.id })}
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.adminEditTeamMember({ id: row.id })}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(row.id)}
                    >
                      Delete
                    </button>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
