// When Meteor.subscribe is called on the client with the publication name,
// the client subscribes to all the data from that publication, which in this
// case is all of the experiences in the database.
Meteor.subscribe('experiences');
