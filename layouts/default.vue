<template>
  <div class="app">
    <Notifications />
    <nuxt />
  </div>
</template>

<script>
import Notifications from '@/components/Notifications';

export default {
  components: {
    Notifications
  }
};
</script>
