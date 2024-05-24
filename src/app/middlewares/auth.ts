class Middleware {
  async decodeToken(
    req: { headers: { authorization: string } },
    res: {
      status: (arg0: number) => {
        (): any
        new (): any
        send: { (arg0: string): any; new (): any }
      }
    },
    next: any
  ) {
    const token = req.headers.authorization.split(' ')[1];

    

    if (!token) {
      return res.status(401).send('Token not provided')
    }
  }
}
