import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _801a4b4e = () => interopDefault(import('..\\_theme\\pages\\Category.vue' /* webpackChunkName: "_theme/pages/Category" */))
const _03433d51 = () => interopDefault(import('..\\_theme\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _f1c9edca = () => interopDefault(import('..\\_theme\\pages\\Checkout\\OrderReview.vue' /* webpackChunkName: "" */))
const _28536d4a = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _3616cf92 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\PersonalDetails.vue' /* webpackChunkName: "" */))
const _d11badae = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _fe001660 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _048bf2be = () => interopDefault(import('..\\_theme\\pages\\Checkout.vue' /* webpackChunkName: "_theme/pages/Checkout" */))
const _1efad6d5 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\OrderReview.vue' /* webpackChunkName: "_theme/pages/Checkout/OrderReview" */))
const _4833f7d6 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "_theme/pages/Checkout/Payment" */))
const _6f3a0e1e = () => interopDefault(import('..\\_theme\\pages\\Checkout\\PersonalDetails.vue' /* webpackChunkName: "_theme/pages/Checkout/PersonalDetails" */))
const _ad4c74a2 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "_theme/pages/Checkout/Shipping" */))
const _da30dd54 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "_theme/pages/Checkout/ThankYou" */))
const _333cbc2c = () => interopDefault(import('..\\_theme\\pages\\Home.vue' /* webpackChunkName: "" */))
const _305cd98c = () => interopDefault(import('..\\_theme\\pages\\Home.vue' /* webpackChunkName: "_theme/pages/Home" */))
const _16bdd8d4 = () => interopDefault(import('..\\_theme\\pages\\MyAccount.vue' /* webpackChunkName: "_theme/pages/MyAccount" */))
const _7c0bfafd = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/BillingDetails" */))
const _6ac99030 = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "_theme/pages/MyAccount/LoyaltyCard" */))
const _4a464bbb = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyNewsletter" */))
const _365a5f17 = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyProfile" */))
const _7ddd4089 = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyReviews" */))
const _258b6d1c = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "_theme/pages/MyAccount/OrderHistory" */))
const _95626724 = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/ShippingDetails" */))
const _6522dc38 = () => interopDefault(import('..\\_theme\\pages\\Product.vue' /* webpackChunkName: "_theme/pages/Product" */))
const _bf829a34 = () => interopDefault(import('..\\_theme\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _e8e87598 = () => interopDefault(import('..\\_theme\\pages\\Product.vue' /* webpackChunkName: "" */))
const _7507ddee = () => interopDefault(import('..\\_theme\\pages\\Category.vue' /* webpackChunkName: "" */))

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
    component: _801a4b4e,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _03433d51,
    name: "checkout___en",
    children: [{
      path: "order-review",
      component: _f1c9edca,
      name: "order-review___en"
    }, {
      path: "payment",
      component: _28536d4a,
      name: "payment___en"
    }, {
      path: "personal-details",
      component: _3616cf92,
      name: "personal-details___en"
    }, {
      path: "shipping",
      component: _d11badae,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _fe001660,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _048bf2be,
    name: "Checkout___en",
    children: [{
      path: "OrderReview",
      component: _1efad6d5,
      name: "Checkout-OrderReview___en"
    }, {
      path: "Payment",
      component: _4833f7d6,
      name: "Checkout-Payment___en"
    }, {
      path: "PersonalDetails",
      component: _6f3a0e1e,
      name: "Checkout-PersonalDetails___en"
    }, {
      path: "Shipping",
      component: _ad4c74a2,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _da30dd54,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _333cbc2c,
    name: "home___de"
  }, {
    path: "/Home",
    component: _305cd98c,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _16bdd8d4,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _7c0bfafd,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _6ac99030,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _4a464bbb,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _365a5f17,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _7ddd4089,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _258b6d1c,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _95626724,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _6522dc38,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _801a4b4e,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _03433d51,
    name: "checkout___de",
    children: [{
      path: "order-review",
      component: _f1c9edca,
      name: "order-review___de"
    }, {
      path: "payment",
      component: _28536d4a,
      name: "payment___de"
    }, {
      path: "personal-details",
      component: _3616cf92,
      name: "personal-details___de"
    }, {
      path: "shipping",
      component: _d11badae,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _fe001660,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _048bf2be,
    name: "Checkout___de",
    children: [{
      path: "OrderReview",
      component: _1efad6d5,
      name: "Checkout-OrderReview___de"
    }, {
      path: "Payment",
      component: _4833f7d6,
      name: "Checkout-Payment___de"
    }, {
      path: "PersonalDetails",
      component: _6f3a0e1e,
      name: "Checkout-PersonalDetails___de"
    }, {
      path: "Shipping",
      component: _ad4c74a2,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _da30dd54,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _305cd98c,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _16bdd8d4,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _7c0bfafd,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _6ac99030,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _4a464bbb,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _365a5f17,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _7ddd4089,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _258b6d1c,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _95626724,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _6522dc38,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _bf829a34,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _e8e87598,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _7507ddee,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _bf829a34,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _e8e87598,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _7507ddee,
    name: "category___en"
  }, {
    path: "/",
    component: _333cbc2c,
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
