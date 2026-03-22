import { db } from 'src/lib/db'

export const pricingTiers = () => {
  return db.pricingTier.findMany({
    orderBy: { order: 'asc' },
  })
}

export const pricingTier = ({ id }) => {
  return db.pricingTier.findUnique({
    where: { id },
  })
}

export const createPricingTier = ({ input }) => {
  return db.pricingTier.create({
    data: input,
  })
}

export const updatePricingTier = ({ id, input }) => {
  return db.pricingTier.update({
    data: input,
    where: { id },
  })
}

export const deletePricingTier = ({ id }) => {
  return db.pricingTier.delete({
    where: { id },
  })
}
