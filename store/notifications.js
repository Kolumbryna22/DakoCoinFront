export const state = () => ({
  notifications: []
});

export const mutations = {
  addNotification (state, notification) {
    state.notifications.splice(0, 0, notification);
  },
  removeNotification (state, notification) {
    state.notifications.splice(state.notifications.indexOf(notification), 1);
  }
};

export const actions = {
  addTimedNotification ({ commit }, item) {
    const notification = new Notification({
      status: item.status,
      message: item.message
    });

    commit('addNotification', notification);
    setTimeout(() => {
      commit('removeNotification', notification);
    }, 3000);
  }
};

class Notification {
  constructor (data) {
    this.id = this.uuid();
    this.status = (data && data.status) || '';
    this.message = (data && data.message) || '';
  }

  uuid () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);

      return v.toString(16);
    });
  }
}
