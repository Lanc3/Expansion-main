import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { sendAdminNotification, sendAutoReply } from 'src/lib/email'

export const contactSubmissions = () => {
  return db.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

export const contactSubmission = ({ id }) => {
  return db.contactSubmission.findUnique({
    where: { id },
  })
}

export const createContactSubmission = async ({ input }) => {
  validate(input.email, 'Email', {
    format: {
      pattern: /@/,
      message: 'Email must contain @',
    },
  })
  validate(input.name, 'Name', { presence: true })
  validate(input.projectDescription, 'Project description', { presence: true })

  const submission = await db.contactSubmission.create({
    data: input,
  })

  try {
    await sendAdminNotification(input)
    await sendAutoReply(input)
  } catch (emailError) {
    console.error('[Email] Failed to send notification:', emailError)
  }

  return submission
}

export const updateContactSubmission = ({ id, input }) => {
  const data = {}
  if (input.status !== undefined) {
    data.status = input.status
  }
  if (input.notes !== undefined) {
    data.notes = input.notes
  }

  return db.contactSubmission.update({
    data,
    where: { id },
  })
}

export const deleteContactSubmission = ({ id }) => {
  return db.contactSubmission.delete({
    where: { id },
  })
}
