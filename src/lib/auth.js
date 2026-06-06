 
 import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URL) {
  throw new Error('MONGODB_URL is not defined in .env.local')
}

const client = new MongoClient(process.env.MONGODB_URL)

await client.connect()

const db = client.db('login')

export const auth = betterAuth({
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
})
