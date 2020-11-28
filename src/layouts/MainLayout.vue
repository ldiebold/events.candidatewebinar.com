<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    v-if="visible"
  >
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar v-if="user && (userIsIbo || userIsAdmin || userIsSuperAdmin)">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />

          <q-toolbar-title>
            Team Pickersgill Events
          </q-toolbar-title>

          <q-btn
            flat
            icon="logout"
            round
            @click="handleLogout"
          />
        </q-toolbar>

        <q-toolbar
          class="bg-white text-grey-9"
          v-if="user && userIsCandidate"
        >
          <q-toolbar-title>
            Team Pickersgill Events
          </q-toolbar-title>

          <q-btn
            flat
            icon="logout"
            round
            @click="handleLogout"
          />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-if="user && (userIsIbo || userIsAdmin || userIsSuperAdmin)"
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-1"
      >
        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          >
            Online Events
          </q-item-label>

          <q-item
            v-for="onlineEvent in onlineEvents"
            :key="onlineEvent.id"
            clickable
            :to="`/event/${onlineEvent.id}`"
          >
            <q-item-section>
              <q-item-label>
                {{ onlineEvent.title }}
              </q-item-label>
              <q-item-label caption>
                {{ onlineEvent.description }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  methods: {
    handleLogout () {
      this.visible = false
      const vm = this
      this.$auth.logout()
        .then(() => {
          setTimeout(() => {
            vm.$router.go('/login')
          }, 300)
        })
    }
  },
  computed: {
    user () {
      const currentUserId = this.$store.state.entities.users.current_user_id
      return this.$MUser.find(currentUserId)
    },

    userIsIbo () {
      return this.user && this.user.role === 'ibo'
    },

    userIsCandidate () {
      return this.user && this.user.role === 'candidate'
    },

    userIsAdmin () {
      return this.user && this.user.role === 'admin'
    },

    userIsSuperAdmin () {
      return this.user && this.user.role === 'super admin'
    },

    onlineEvents () {
      return this.$MOnlineEvent.all()
    }
  },

  mounted () {
    if (!this.onlineEvents.length) {
      this.fetchingEvents = true
      this.$MOnlineEvent.$get()
    }

    setTimeout(() => {
      this.visible = true
    }, 400)
  },

  data () {
    return {
      leftDrawerOpen: false,

      visible: false,

      menuItems: [
        {
          icon: 'person',
          label: 'Candidates',
          description: 'manage candidate accounts',
          to: '/candidates'
        },
        {
          icon: 'calendar',
          label: 'Events',
          description: 'create and edit events',
          to: '/events'
        }
      ]
    }
  }
}
</script>
