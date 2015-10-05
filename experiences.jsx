// Define a collection to hold our experiences.
// It can be accessed from both the server and the client, making it easy to
// write view logic without having to write a lot of server code. They also
// update themselves automatically, so a view component backed by a collection
// will automatically display the most up-to-date data.
Experiences = new Mongo.Collection('experiences');

// Executed on the client only.
if (Meteor.isClient) {
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
}

if (Meteor.isServer) {
  // Calling Meteor.publish on the server registers a publication named
  // "experiences". // Only publish experiences that are public or belong to
  // the current user
  Meteor.publish('experiences', function() {
    return Experiences.find({
      $or: [
        { private: {$ne: true} },
        { owner: this.userId },
      ],
    });
  });
}

// We need one method for each database operation we want to perform on the
// client. Methods should be defined in code that is executed on the client
// and the server.
Meteor.methods({
  addExperience(title) {
    // Make sure the user is logged in before inserting a experience.
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    // We add an item to the experiences collection.
    // We can assign any properties to the experience object, such as the time
    // created, since we don't ever have to define a schema for the collection.
    Experiences.insert({
      title: title,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },

  removeExperience(experienceId) {
    const experience = Experiences.findOne(experienceId);

    if (experience.private && experience.owner !== Meteor.userId()) {
      // If the experience is private, make sure only the owner can delete it.
      throw new Meteor.Error('not-authorized');
    }

    Experiences.remove(experienceId);
  },

  setChecked(experienceId, setChecked) {
    const experience = Experiences.findOne(experienceId);

    if (experience.private && experience.owner !== Meteor.userId()) {
      // If the experience is private, make sure only the owner can check it off.
      throw new Meteor.Error('not-authorized');
    }

    Experiences.update(experienceId, { $set: { checked: setChecked} });
  },

  setPrivate(experienceId, setToPrivate) {
    const experience = Experiences.findOne(experienceId);

    // Make sure only the experience owner can make a experience private.
    if (experience.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Experiences.update(experienceId, { $set: { private: setToPrivate } });
  },

});
