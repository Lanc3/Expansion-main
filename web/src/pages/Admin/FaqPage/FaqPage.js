import FaqAdminCell from 'src/components/Admin/Faq/FaqAdminCell/FaqAdminCell'

const FaqPage = ({ id }) => {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <FaqAdminCell id={id} />
    </div>
  )
}

export default FaqPage
