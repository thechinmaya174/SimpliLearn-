'use server'

export async function submitRSVP(formData: FormData): Promise<void> {
  const { rsvpTable } = await import('@/lib/airtable') // lazy import
  const email = formData.get('email') as string

  if (!email) throw new Error('Email is required')

  await rsvpTable.create([{ fields: { Email: email } }])
}
