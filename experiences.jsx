// Define a collection to hold our experiences.
// It can be accessed from both the server and the client, making it easy to
// write view logic without having to write a lot of server code. They also
// update themselves automatically, so a view component backed by a collection
// will automatically display the most up-to-date data.
Experiences = new Mongo.Collection("experiences");

// Executed on the client only.
if (Meteor.isClient) {
  Meteor.startup(function () {
    // Renders the component after the page is ready.
    React.render(<App />, document.getElementById("render-target"));
  });
}
