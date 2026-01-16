'use server'

import { rsvpTable } from '@/lib/airtable'

export async function submitRSVP(formData: FormData) {
  const email = formData.get('email') as string

  if (!email) {
    return { success: false }
  }

  await rsvpTable.create([
    {
      fields: {
        Email: email,
      },
    },
  ])

  return { success: true }
}
