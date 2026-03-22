import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TeamMemberForm from 'src/components/Admin/TeamMember/TeamMemberForm/TeamMemberForm'
import ErrorState from 'src/components/ErrorState/ErrorState'
import { SkeletonText } from 'src/components/SkeletonLoader/SkeletonLoader'

export const QUERY = gql`
  query AdminEditTeamMember($id: Int!) {
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
    }
  }
`

const UPDATE_TEAM_MEMBER_MUTATION = gql`
  mutation AdminUpdateTeamMember($id: Int!, $input: UpdateTeamMemberInput!) {
    updateTeamMember(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <SkeletonText lines={6} />

export const Empty = () => <ErrorState message="Team member not found" />

export const Failure = ({ error }) => (
  <ErrorState message={error?.message} />
)

export const Success = ({ teamMember }) => {
  const [updateTeamMember, { loading, error }] = useMutation(
    UPDATE_TEAM_MEMBER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Team member updated')
        navigate(routes.adminTeamMembers())
      },
      onError: (err) => {
        toast.error(err.message)
      },
    }
  )

  if (!teamMember) {
    return <ErrorState message="Team member not found" />
  }

  const onSave = (input, id) => {
    updateTeamMember({ variables: { id, input } })
  }

  return (
    <div className="rw-segment space-y-4">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit team member #{teamMember.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TeamMemberForm
          teamMember={teamMember}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
