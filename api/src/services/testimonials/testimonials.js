import { db } from 'src/lib/db'

export const testimonials = () => {
  return db.testimonial.findMany({
    orderBy: { order: 'asc' },
  })
}

export const testimonial = ({ id }) => {
  return db.testimonial.findUnique({
    where: { id },
  })
}

export const createTestimonial = ({ input }) => {
  return db.testimonial.create({
    data: input,
  })
}

export const updateTestimonial = ({ id, input }) => {
  return db.testimonial.update({
    data: input,
    where: { id },
  })
}

export const deleteTestimonial = ({ id }) => {
  return db.testimonial.delete({
    where: { id },
  })
}
