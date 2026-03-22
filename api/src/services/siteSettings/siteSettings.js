import { db } from 'src/lib/db'

export const siteSettings = () => {
  return db.siteSetting.findMany()
}

export const siteSetting = ({ id }) => {
  return db.siteSetting.findUnique({
    where: { id },
  })
}

export const siteSettingByKey = ({ key }) =>
  db.siteSetting.findUnique({ where: { key } })

export const bulkUpdateSiteSettings = async ({ input }) => {
  const results = []
  for (const item of input) {
    const updated = await db.siteSetting.update({
      where: { id: item.id },
      data: { value: item.value },
    })
    results.push(updated)
  }
  return results
}

export const createSiteSetting = ({ input }) => {
  return db.siteSetting.create({
    data: input,
  })
}

export const updateSiteSetting = ({ id, input }) => {
  return db.siteSetting.update({
    data: input,
    where: { id },
  })
}

export const deleteSiteSetting = ({ id }) => {
  return db.siteSetting.delete({
    where: { id },
  })
}
