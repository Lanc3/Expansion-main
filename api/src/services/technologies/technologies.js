import { db } from 'src/lib/db'

export const technologies = () => {
  return db.technology.findMany({
    orderBy: { order: 'asc' },
  })
}

export const technology = ({ id }) => {
  return db.technology.findUnique({
    where: { id },
  })
}

export const createTechnology = ({ input }) => {
  return db.technology.create({
    data: input,
  })
}

export const updateTechnology = ({ id, input }) => {
  return db.technology.update({
    data: input,
    where: { id },
  })
}

export const deleteTechnology = ({ id }) => {
  return db.technology.delete({
    where: { id },
  })
}
