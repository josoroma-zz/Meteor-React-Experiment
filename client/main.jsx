// Configure the accounts UI to use usernames instead of email addresses.
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

// When Meteor.subscribe is called on the client with the publication name,
// the client subscribes to all the data from that publication, which in this
// case is all of the experiences in the database.
Meteor.subscribe('experiences');

Meteor.startup(function() {
  // Renders the component after the page is ready.
  React.render(<App />, document.getElementById('render-target'));
});
