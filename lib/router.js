// FlowRouter.go('/');
FlowRouter.route('/', {
  name: 'home',

  subscriptions: function() {
    this.register('experiences', Meteor.subscribe('experiences'));
  },

  action: function() {
    /* The key 'content' is now a function */
    ReactLayout.render(App);
  },
});

// FlowRouter.go('/test/1/1/?foo=bar');
// FlowRouter.go('/test/2/2/?bar=foo');
FlowRouter.route('/test/:category/:itemId', {
  name: 'test',

  action: function(params, queryParams) {
    console.log('params: ', params);
    console.log('queryParams: ', queryParams);
  },
});
