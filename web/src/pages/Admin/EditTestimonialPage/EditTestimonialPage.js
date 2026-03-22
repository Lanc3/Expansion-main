import EditTestimonialAdminCell from 'src/components/Admin/Testimonial/EditTestimonialAdminCell/EditTestimonialAdminCell'

const EditTestimonialPage = ({ id }) => {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <EditTestimonialAdminCell id={id} />
    </div>
  )
}

export default EditTestimonialPage
