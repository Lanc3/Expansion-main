import { db } from 'src/lib/db'

export const newsletterSubscribers = () => {
  return db.newsletterSubscriber.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

export const newsletterSubscriber = ({ id }) => {
  return db.newsletterSubscriber.findUnique({
    where: { id },
  })
}

export const createNewsletterSubscriber = async ({ input }) => {
  const existing = await db.newsletterSubscriber.findUnique({
    where: { email: input.email },
  })
  if (existing) {
    return existing
  }

  return db.newsletterSubscriber.create({
    data: input,
  })
}

export const updateNewsletterSubscriber = ({ id, input }) => {
  return db.newsletterSubscriber.update({
    data: input,
    where: { id },
  })
}

export const deleteNewsletterSubscriber = ({ id }) => {
  return db.newsletterSubscriber.delete({
    where: { id },
  })
}
