import { db } from 'src/lib/db'

export const clientLogos = () => {
  return db.clientLogo.findMany({
    orderBy: { order: 'asc' },
  })
}

export const clientLogo = ({ id }) => {
  return db.clientLogo.findUnique({
    where: { id },
  })
}

export const createClientLogo = ({ input }) => {
  return db.clientLogo.create({
    data: input,
  })
}

export const updateClientLogo = ({ id, input }) => {
  return db.clientLogo.update({
    data: input,
    where: { id },
  })
}

export const deleteClientLogo = ({ id }) => {
  return db.clientLogo.delete({
    where: { id },
  })
}
