// Once subscribed, the client uses its cache as a fast local database,
// dramatically simplifying client code. Reads never require a costly
// round trip to the server. And they're limited to the contents of the
// cache: a query for every document in a collection on a client will only
// return documents the server is publishing to that client.

// "Any data we subscribe to will be mirrored on the client thanks to Minimongo,
// Meteor’s client-side implementation of MongoDB."

// When Meteor.subscribe is called on the client with the publication name,
// the client subscribes to all the data from that publication, which in this
// case is all of the experiences in the database.
Meteor.subscribe('experiences');
