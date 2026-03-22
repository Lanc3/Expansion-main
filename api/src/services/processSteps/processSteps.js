import { db } from 'src/lib/db'

export const processSteps = () => {
  return db.processStep.findMany({
    orderBy: { order: 'asc' },
  })
}

export const processStep = ({ id }) => {
  return db.processStep.findUnique({
    where: { id },
  })
}

export const createProcessStep = ({ input }) => {
  return db.processStep.create({
    data: input,
  })
}

export const updateProcessStep = ({ id, input }) => {
  return db.processStep.update({
    data: input,
    where: { id },
  })
}

export const deleteProcessStep = ({ id }) => {
  return db.processStep.delete({
    where: { id },
  })
}
