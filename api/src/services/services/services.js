import { db } from 'src/lib/db'

export const services = () => {
  return db.service.findMany({
    orderBy: { order: 'asc' },
  })
}

export const service = ({ id }) => {
  return db.service.findUnique({
    where: { id },
  })
}

export const serviceBySlug = ({ slug }) => {
  return db.service.findUnique({
    where: { slug },
  })
}

export const activeServices = () => {
  return db.service.findMany({
    where: { isActive: true },
    orderBy: { order: 'asc' },
  })
}

export const createService = ({ input }) => {
  return db.service.create({
    data: input,
  })
}

export const updateService = ({ id, input }) => {
  return db.service.update({
    data: input,
    where: { id },
  })
}

export const deleteService = ({ id }) => {
  return db.service.delete({
    where: { id },
  })
}
