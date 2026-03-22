import TeamMemberAdminCell from 'src/components/Admin/TeamMember/TeamMemberAdminCell/TeamMemberAdminCell'

const TeamMemberPage = ({ id }) => {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <TeamMemberAdminCell id={id} />
    </div>
  )
}

export default TeamMemberPage
