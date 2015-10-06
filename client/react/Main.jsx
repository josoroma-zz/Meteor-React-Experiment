Meteor.startup(function() {
  // Renders the component after the page is ready.
  React.render(<App />, document.getElementById('render-target'));
});
