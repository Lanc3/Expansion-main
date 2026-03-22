import { db } from 'src/lib/db'

export const projectDatas = () => {
  return db.projectData.findMany()
}

export const projectData = ({ id }) => {
  return db.projectData.findUnique({
    where: { id },
  })
}

export const createProjectData = ({ input }) => {
  return db.projectData.create({
    data: input,
  })
}

export const updateProjectData = ({ id, input }) => {
  return db.projectData.update({
    data: input,
    where: { id },
  })
}

export const deleteProjectData = ({ id }) => {
  return db.projectData.delete({
    where: { id },
  })
}
