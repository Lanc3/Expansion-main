import { db } from 'src/lib/db'

export const legalPages = () => {
  return db.legalPage.findMany()
}

export const legalPage = ({ id }) => {
  return db.legalPage.findUnique({
    where: { id },
  })
}

export const legalPageBySlug = ({ slug }) =>
  db.legalPage.findUnique({ where: { slug } })

export const createLegalPage = ({ input }) => {
  return db.legalPage.create({
    data: input,
  })
}

export const updateLegalPage = ({ id, input }) => {
  return db.legalPage.update({
    data: input,
    where: { id },
  })
}

export const deleteLegalPage = ({ id }) => {
  return db.legalPage.delete({
    where: { id },
  })
}
