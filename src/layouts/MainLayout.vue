<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    v-if="visible"
  >
    <q-layout view="lHr Lpr lFf">
      <q-header elevated>
        <q-toolbar v-if="user && (userIsIbo || userIsAdmin || userIsSuperAdmin || userIsCandidate)">
          <q-btn
            flat
            dense
            round
            icon="mdi-menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />

          <q-toolbar-title>
            Events
          </q-toolbar-title>

          <MSelectAppButton
            icon="mdi-apps"
            dense
            flat
            current-app-name="events"
            :user="user"
          />

          <q-btn
            class="q-ml-sm"
            flat
            icon="mdi-logout"
            round
            @click="handleLogout"
          />

          <q-btn
            :class="{
              'q-ml-sm': true,
              'bg-white': rightDrawerOpen,
              'text-grey-8': rightDrawerOpen
            }"
            flat
            dense
            round
            icon="mdi-account-group"
            aria-label="Menu"
            @click="rightDrawerOpen = !rightDrawerOpen"
          />
        </q-toolbar>

        <q-toolbar
          class="bg-white text-grey-9"
          v-if="user && userIsCandidate"
        >
          <q-toolbar-title>
            Events
          </q-toolbar-title>

          <q-btn
            flat
            icon="mdi-logout"
            round
            @click="handleLogout"
          />
        </q-toolbar>
      </q-header>

      <q-drawer
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

      <!-- <q-drawer
        v-if="user && (userIsIbo || userIsAdmin || userIsSuperAdmin)"
        side="right"
        v-model="rightDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-1"
      >
        <q-toolbar class="bg-primary text-white">
          <q-toolbar-title>Candidates Present</q-toolbar-title>
        </q-toolbar>
        <q-list>
          <q-item
            v-for="candidate in $MUser.query().where('inOnlineEvent', true).get()"
            :key="candidate.id"
          >
            {{ candidate.name }}
          </q-item>
        </q-list>
      </q-drawer> -->

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script>
import { MSelectAppButton } from '@ldiebold/quasar-ui-process-model-components/src'

export default {
  name: 'MainLayout',
  components: { MSelectAppButton },
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
      return this.$MUser.getSessionUser()
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
    if (!this.userIsCandidate) {
      this.$MTutorialVideo.$get()
    }

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

      rightDrawerOpen: false,

      visible: false
    }
  }
}
</script>
