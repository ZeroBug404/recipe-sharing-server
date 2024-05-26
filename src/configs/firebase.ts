/* eslint-disable @typescript-eslint/no-var-requires */
import admin from 'firebase-admin'
const serviceAccount = require('./path/to/serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

export default admin
