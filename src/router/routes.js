// import User from '../models/User'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'event/:online_event_id',
        component: () => import('pages/OnlineEventPageVimeo.vue')
      },
      {
        path: 'candidate',
        component: () => import('pages/CandidateOnlineEventPage.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/Login.vue')
      },
      {
        path: 'event/private/:online_event_public_uid',
        name: 'public-link',
        component: () => import('pages/PublicLinkPage.vue')
      },
      {
        path: 'event/private/:online_event_public_uid/:online_event_id',
        name: 'public-link.online_event',
        component: () => import('pages/PublicLinkPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

// function handleIsCandidate (next) {
//   const user = User.getSessionUser() || User.query().first()
//   if (user.role === 'candidate') {
//     next('candidate')
//   } else {
//     return next()
//   }
// }
