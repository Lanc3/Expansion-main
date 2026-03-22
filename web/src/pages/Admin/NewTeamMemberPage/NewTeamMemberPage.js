import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TeamMemberForm from 'src/components/Admin/TeamMember/TeamMemberForm/TeamMemberForm'

const CREATE_TEAM_MEMBER_MUTATION = gql`
  mutation AdminCreateTeamMember($input: CreateTeamMemberInput!) {
    createTeamMember(input: $input) {
      id
    }
  }
`

const NewTeamMemberPage = () => {
  const [createTeamMember, { loading, error }] = useMutation(
    CREATE_TEAM_MEMBER_MUTATION,
    {
      onCompleted: (data) => {
        toast.success('Team member created')
        navigate(routes.adminTeamMember({ id: data.createTeamMember.id }))
      },
      onError: (err) => {
        toast.error(err.message)
      },
    }
  )

  const onSave = (input) => {
    createTeamMember({ variables: { input } })
  }

  return (
    <div className="glass-panel rounded-2xl p-6 space-y-4">
      <h1 className="rw-heading rw-heading-secondary">New team member</h1>
      <TeamMemberForm onSave={onSave} error={error} loading={loading} />
    </div>
  )
}

export default NewTeamMemberPage
