import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('https://www.reddit.com/r/funny.json')
      .then((result) => {
        return result.data.children;
        {{debugger}}
      });
  }
});
