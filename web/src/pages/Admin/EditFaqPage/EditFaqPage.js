import EditFaqAdminCell from 'src/components/Admin/Faq/EditFaqAdminCell/EditFaqAdminCell'

const EditFaqPage = ({ id }) => {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <EditFaqAdminCell id={id} />
    </div>
  )
}

export default EditFaqPage
