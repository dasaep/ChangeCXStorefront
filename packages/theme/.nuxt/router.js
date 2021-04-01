import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9028075c = () => interopDefault(import('../_theme/pages/Category.vue' /* webpackChunkName: "_theme/pages/Category" */))
const _1499aecc = () => interopDefault(import('../_theme/pages/Checkout.vue' /* webpackChunkName: "" */))
const _2289629e = () => interopDefault(import('../_theme/pages/Checkout/OrderReview.vue' /* webpackChunkName: "" */))
const _83166c1e = () => interopDefault(import('../_theme/pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _512c22cd = () => interopDefault(import('../_theme/pages/Checkout/PersonalDetails.vue' /* webpackChunkName: "" */))
const _18a3bb53 = () => interopDefault(import('../_theme/pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _023186fa = () => interopDefault(import('../_theme/pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _5e1499b3 = () => interopDefault(import('../_theme/pages/Home.vue' /* webpackChunkName: "" */))
const _08679e86 = () => interopDefault(import('../_theme/pages/MyAccount.vue' /* webpackChunkName: "_theme/pages/MyAccount" */))
const _b8e21fae = () => interopDefault(import('../_theme/pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/BillingDetails" */))
const _50128a84 = () => interopDefault(import('../_theme/pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "_theme/pages/MyAccount/LoyaltyCard" */))
const _0e1c9be7 = () => interopDefault(import('../_theme/pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyNewsletter" */))
const _0ef4432a = () => interopDefault(import('../_theme/pages/MyAccount/MyProfile.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyProfile" */))
const _4008bfdd = () => interopDefault(import('../_theme/pages/MyAccount/MyReviews.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyReviews" */))
const _2d3c8570 = () => interopDefault(import('../_theme/pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "_theme/pages/MyAccount/OrderHistory" */))
const _7e2a7cc2 = () => interopDefault(import('../_theme/pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/ShippingDetails" */))
const _0f3ccccb = () => interopDefault(import('../_theme/pages/Product.vue' /* webpackChunkName: "_theme/pages/Product" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _9028075c,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _1499aecc,
    name: "checkout___en",
    children: [{
      path: "order-review",
      component: _2289629e,
      name: "order-review___en"
    }, {
      path: "payment",
      component: _83166c1e,
      name: "payment___en"
    }, {
      path: "personal-details",
      component: _512c22cd,
      name: "personal-details___en"
    }, {
      path: "shipping",
      component: _18a3bb53,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _023186fa,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _1499aecc,
    name: "Checkout___en",
    children: [{
      path: "OrderReview",
      component: _2289629e,
      name: "Checkout-OrderReview___en"
    }, {
      path: "Payment",
      component: _83166c1e,
      name: "Checkout-Payment___en"
    }, {
      path: "PersonalDetails",
      component: _512c22cd,
      name: "Checkout-PersonalDetails___en"
    }, {
      path: "Shipping",
      component: _18a3bb53,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _023186fa,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _5e1499b3,
    name: "home___de"
  }, {
    path: "/Home",
    component: _5e1499b3,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _08679e86,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _b8e21fae,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _50128a84,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _0e1c9be7,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _0ef4432a,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _4008bfdd,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _2d3c8570,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _7e2a7cc2,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _0f3ccccb,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _9028075c,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _1499aecc,
    name: "checkout___de",
    children: [{
      path: "order-review",
      component: _2289629e,
      name: "order-review___de"
    }, {
      path: "payment",
      component: _83166c1e,
      name: "payment___de"
    }, {
      path: "personal-details",
      component: _512c22cd,
      name: "personal-details___de"
    }, {
      path: "shipping",
      component: _18a3bb53,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _023186fa,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _1499aecc,
    name: "Checkout___de",
    children: [{
      path: "OrderReview",
      component: _2289629e,
      name: "Checkout-OrderReview___de"
    }, {
      path: "Payment",
      component: _83166c1e,
      name: "Checkout-Payment___de"
    }, {
      path: "PersonalDetails",
      component: _512c22cd,
      name: "Checkout-PersonalDetails___de"
    }, {
      path: "Shipping",
      component: _18a3bb53,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _023186fa,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _5e1499b3,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _08679e86,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _b8e21fae,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _50128a84,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _0e1c9be7,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _0ef4432a,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _4008bfdd,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _2d3c8570,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _7e2a7cc2,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _0f3ccccb,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _08679e86,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _0f3ccccb,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _9028075c,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _08679e86,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _0f3ccccb,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _9028075c,
    name: "category___en"
  }, {
    path: "/",
    component: _5e1499b3,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
