import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        post: this.get('post')
      };
      this.sendAction('saveComment', params);
    },
  }
});
