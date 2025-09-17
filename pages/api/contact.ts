  console.log('API route hit')
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  // Configure your SMTP transport (use your own credentials)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'ashaswin28112004@gmail.com', // your Gmail address
      pass: 'your-app-password',          // your Gmail app password
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: 'ashaswin28112004@gmail.com', // your Gmail address
      subject: `Portfolio Contact: ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
    })
    return res.status(200).json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.log('Email send error:', error)
    return res.status(500).json({ message: 'Failed to send message', error })
  }
}
