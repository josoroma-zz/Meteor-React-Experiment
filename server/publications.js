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
