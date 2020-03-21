<template>
  <div class="ideas">
    <IdeaForm @newIdea="addNewIdea($event)" />
    <div class="ideas-list">
      <table>
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              Idea
            </th>
            <th>
              Upload date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
              v-for="idea in ideas"
              :key="idea.id"
          >
            <td>
              {{ idea.id }}
            </td>
            <td>
              {{ idea.idea }}
            </td>
            <td>
              {{ idea.prettyDate() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import IdeaForm from '@/components/molecules/ideaForm';

class Idea {
  constructor (data) {
    this.id = (data && data._id) || `new${this.uuid()}`;
    this.idea = (data && data.idea) || '';
    this.date = (data && data.uploadDate) || this.today();
  }

  today () {
    const today = new Date();

    return today.getTime();
  }

  prettyDate () {
    const date = new Date(this.date);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return year + '-' + (month < 9 ? '0' + (month + 1) : month + 1) + '-' + (day < 10 ? '0' + day : day);
  }

  uuid () {
    return 'xxxxxxxx-xxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);

      return v.toString(16);
    });
  }
}

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
        self.ideas = res.data.map(idea => new Idea(idea)).sort((a, b) => {
          return b.date - a.date;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    addNewIdea (data) {
      this.ideas.unshift(new Idea(data));
    }
  }
};
</script>
