<template>
  <div class="ideas">
    <IdeaForm />
    <div class="ideas-list">
      <p
          v-for="(idea, index) in ideas"
          :key="index"
      >
        {{ idea }}
      </p>
    </div>
  </div>
</template>

<script>
import IdeaForm from '@/components/molecules/ideaForm';

export default {
  components: {
    IdeaForm
  },
  data () {
    return {
      ideas: []
    };
  },
  mounted () {
    const self = this;

    this.$axios.get('http://localhost:8080/ideas')
      .then((res) => {
        self.ideas = res.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
</script>
