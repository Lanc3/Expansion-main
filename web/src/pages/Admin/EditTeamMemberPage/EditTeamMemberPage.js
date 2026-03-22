import EditTeamMemberAdminCell from 'src/components/Admin/TeamMember/EditTeamMemberAdminCell/EditTeamMemberAdminCell'

const EditTeamMemberPage = ({ id }) => {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <EditTeamMemberAdminCell id={id} />
    </div>
  )
}

export default EditTeamMemberPage
