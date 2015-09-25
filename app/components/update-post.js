import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    updatePost(post) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        location: this.get('location'),
      };
      this.set('updatePostForm', false);
      this.sendAction('updatePost', post, params);
    },
  }
});
