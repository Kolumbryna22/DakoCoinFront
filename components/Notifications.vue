<template>
  <section class="notification-wrapper">
    <transition-group
        name="notifications"
        tag="p"
    >
      <div
          v-for="notification in notifications"
          :key="notification.id"
          :class="notification.status ? 'succes' : 'failure'"
          class="notification"
          @click="closeNotification(notification)"
      >
        <span
            :class="notification.status ? 'success-icon' : 'failure-icon'"
            class="notification-icon"
        />
        <p class="description">
          {{ notification.message }}
        </p>
      </div>
    </transition-group>
  </section>
</template>

<script>
export default {
  computed: {
    notifications () {
      return this.$store.state.notifications.notifications;
    }
  },
  methods: {
    closeNotification (notification) {
      this.$store.commit('notifications/removeNotification', notification);
    }
  }
};
</script>
