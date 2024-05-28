/* eslint-disable @typescript-eslint/no-var-requires */
import { User } from '../user/user.model'

const stripe = require('stripe')(
  'sk_test_51PKlxWGv0Q9qhIkCGNv84EnJQ1kQg2eYTNSLbHzio5wuF7vuPvTElgpzwhjyXnmlHo7My7lzL5Ik2aGKupNjsmtU00ZyoxZSrH'
)

const insertStartupPaymentIntoDB = async (
  plan: string | null,
  userId: string
) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price: plan,
        quantity: 1,
      },
    ],
    success_url: 'https://recipe-sharing-green.vercel.app/all-recipes',
    cancel_url: 'https://recipe-sharing-green.vercel.app/buy-coin',
  })

  if (!session) {
    throw new Error('Error creating session')
  }
  console.log(plan, userId)

  if (plan === 'price_1PKm6LGv0Q9qhIkCfIq4vC2m') {
    await User.findByIdAndUpdate({ _id: userId }, { $inc: { coin: 100 } })
  } else if (plan === 'price_1PKm7KGv0Q9qhIkCjN07yKay') {
    await User.findByIdAndUpdate({ _id: userId }, { $inc: { coin: 500 } })
  } else if (plan === 'price_1PKm7vGv0Q9qhIkCm3oDsGQq') {
    await User.findByIdAndUpdate({ _id: userId }, { $inc: { coin: 1000 } })
  }

  return session
}

export const PaymentService = {
  insertStartupPaymentIntoDB,
}
