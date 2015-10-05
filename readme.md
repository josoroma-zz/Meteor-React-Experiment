Meteor React Experiment
=======================

![If user is guest](public/img/experiences-out.png)

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

## Filtering data with publish and subscribe

![If user logged in](public/img/experiences-in.png)

We need a way of controlling which data Meteor sends to the client-side database. Just like with insecure in the last step, all new Meteor apps start with the `autopublish` package, which automatically synchronizes all of the database contents to the client.

When the app refreshes, the experiences list will be empty. Without the `autopublish` package, we will have to specify explicitly what the server sends to the client.

```
meteor remove autopublish
```

## Extra Security Checks

The private experience feature add checks within deleteExperience and setChecked methods to make sure only the experience owner can delete or check off a private experience.

## Structuring our Meteor React App

```
mkdir -p client/compatibility client/helpers client/wrappers server public/img public/js public/css private lib/collections tests
```

 - `client`, similar to wrapping your code in `if (Meteor.isClient) { ... }`.

 - `server`, similar to wrapping your code in `if (Meteor.isServer) { ... }`.

 - `public`, when referencing these assets, do not include public/ in the URL, for example: `<img src='/bg.png' />`. This is the best place for favicon.ico, robots.txt, and similar files.

 - `private` are only accessible from `server` code and can be loaded via the Assets API. This can be used for private data files.

 - `client/compatibility` is for compatibility JavaScript libraries that rely on variables declared with var at the top level being exported as globals. Files in this directory are executed without being wrapped in a new variable scope. These files are executed before other client-side JavaScript files.

 - `tests` folder is not loaded anywhere. Used for any local test code.

 - `node_modules` for compatibility with `node.js` tools used alongside Meteor, any directory named node_modules is not loaded anywhere. node.js packages installed into node_modules directories will not be available to our Meteor code. Use `Npm.depends` in your package package.js file for that.

### Initial Structure

```
tree -d

├── client
│   ├── compatibility
│   ├── helpers
│   └── wrappers
├── lib
│   └── collections
├── private
├── public
│   ├── css
│   ├── img
│   └── js
├── server
└── tests
```

## What's next?

 - Refactor.
 - Routes & SEO.
 - Places relation and google map screens.
