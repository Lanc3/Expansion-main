import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const nicolaPosts = () => {
  requireAuth({ roles: 'admin' })
  return db.nicolaPost.findMany()
}

export const nicolaPost = ({ id }) => {
  requireAuth({ roles: 'admin' })
  return db.nicolaPost.findUnique({
    where: { id },
  })
}

export const createNicolaPost = ({ input }) => {
  requireAuth({ roles: 'admin' })
  return db.nicolaPost.create({
    data: input,
  })
}

export const updateNicolaPost = ({ id, input }) => {
  requireAuth({ roles: 'admin' })
  return db.nicolaPost.update({
    data: input,
    where: { id },
  })
}

export const deleteNicolaPost = ({ id }) => {
  requireAuth({ roles: 'admin' })
  return db.nicolaPost.delete({
    where: { id },
  })
}
