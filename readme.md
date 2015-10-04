Meteor React Experiment
=======================

## Create a Meteor App

```
meteor create experiences
```

```
cd experiences
```

## Use React as a View Library

```
meteor add react
```

Includes everything we need to get started using React in Meteor:

 - The React library itself.

 - Automatic compilation of .jsx files.

 - A ReactMeteorData mixin for loading data.

```
rm experiences.js

touch experiences.jsx App.jsx Experience.jsx
```

## Storing Items in a Collection

In the web browser, we will see the UI of our app immediately update to show the new item, it just happens automatically for us.

```
meteor mongo

db.experiences.insert({ title: "My First Experience", createdAt: new Date() });
db.experiences.insert({ title: "My Second Experience", createdAt: new Date() });
db.experiences.insert({ title: "My Third Experience", createdAt: new Date() });
```

## Deploy

```
meteor deploy experiences.meteor.com
```

## Meteor work across different platforms

```
meteor install-sdk ios && meteor add-platform ios

meteor run ios
```

## Accounts System and Login User Interface

```
meteor add accounts-ui accounts-password
```

We can add the accounts-facebook package to enable Facebook login in our app - the Facebook button will automatically appear in the dropdown.

```
meteor add accounts-facebook

meteor add accounts-twitter
```

## Remove the Insecure Package

It allows us to edit the database from the client. It's useful when prototyping, but now we are taking off the training wheels.

```
meteor remove insecure

meteor list
```

### Methods and Optimistic UI

When we call a method on the client using `Meteor.call`, two things happen in parallel:

 - The client sends a request to the server to run the method in a secure environment, just like an AJAX request would work

 - A simulation of the method runs directly on the client to attempt to predict the outcome of the server call using the available information

What this means is that a newly created `experience` actually appears on the screen before the result comes back from the server.

With `Meteor methods` and `Optimistic UI`, we get the best of both worlds — the security of server code and no round-trip delay.
