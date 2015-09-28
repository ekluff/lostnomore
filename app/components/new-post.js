import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    save() {
      var params = {
        author: this.get('author'),
        location: this.get('location'),
        title: this.get('title'),
        body: this.get('body')
      };
      this.set('addNewPost', false);
      this.sendAction('save', params);
    },
  }
});
