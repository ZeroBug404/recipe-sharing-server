import express from 'express'
import { UserRoutes } from '../modules/user/user.routes'
import { RecipeRoutes } from '../modules/recipe/recipe.routes'
import { PaymentRoutes } from '../modules/payment/payment.routes'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/recipes',
    route: RecipeRoutes,
  },
  {
    path: "/payments",
    route: PaymentRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
