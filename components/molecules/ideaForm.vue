<template>
  <div class="idea-form">
    <label for="idea">
      Add idea
    </label>
    <input
        id="idea"
        v-model="form.idea"
        type="text"
        name="idea"
    >
    <label for="password">
      Confirm saving with password
    </label>
    <input
        id="password"
        v-model="form.password"
        type="text"
        name="password"
        class="password"
    >
    <button
        class="btn-add"
        @click.prevent="addIdea"
    >
      Add idea
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        idea: '',
        password: ''
      },
      error: false
    };
  },
  methods: {
    addIdea () {
      const self = this;
      const data = new FormData();

      if (Object.values(this.form).includes('')) {
        this.$store.dispatch('notifications/addTimedNotification', {
          status: false,
          message: 'All fields are required'
        });

        return 0;
      }

      data.append('idea', this.form.idea);
      data.append('password', this.form.password);

      this.$axios.post('http://localhost:8080/proveIt', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => {
          self.$emit('newIdea', self.form);
          self.$store.dispatch('notifications/addTimedNotification', {
            status: true,
            message: 'Correctly add new idea'
          });
        })
        .catch((e) => {
          self.$store.dispatch('notifications/addTimedNotification', {
            status: false,
            message: 'Something went wrong'
          });
        });
    }
  }
};
</script>
