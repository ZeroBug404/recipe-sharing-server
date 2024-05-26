import admin from "../../configs/firebase";


const authenticate = async (
  req: { headers: { authorization: string }; user: any },
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      send: { (arg0: string): void; new (): any }
    }
  },
  next: () => void
) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).send('Unauthorized')

  try {
    const decodedToken = await admin.auth().verifyIdToken(token)
    req.user = decodedToken
    next()
  } catch (error) {
    res.status(401).send('Unauthorized')
  }
}

export default authenticate;
