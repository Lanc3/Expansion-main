import TestimonialAdminCell from 'src/components/Admin/Testimonial/TestimonialAdminCell/TestimonialAdminCell'

const TestimonialPage = ({ id }) => {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <TestimonialAdminCell id={id} />
    </div>
  )
}

export default TestimonialPage
