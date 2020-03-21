<template>
  <div class="home container">
    <h1>
      Dako Coin
    </h1>
    <h3>
      It's a simple app for storing ideas on blockchain.
    </h3>
    <Ideas />
  </div>
</template>

<script>
import Ideas from '@/components/ideas';

export default {
  components: {
    Ideas
  }
};
</script>
