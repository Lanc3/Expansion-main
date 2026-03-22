import { db } from 'src/lib/db'

export const nicolaPosts = () => {
  return db.nicolaPost.findMany()
}

export const nicolaPost = ({ id }) => {
  return db.nicolaPost.findUnique({
    where: { id },
  })
}

export const createNicolaPost = ({ input }) => {
  return db.nicolaPost.create({
    data: input,
  })
}

export const updateNicolaPost = ({ id, input }) => {
  return db.nicolaPost.update({
    data: input,
    where: { id },
  })
}

export const deleteNicolaPost = ({ id }) => {
  return db.nicolaPost.delete({
    where: { id },
  })
}
