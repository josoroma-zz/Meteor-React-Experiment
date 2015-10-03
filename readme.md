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

# Storing Items in a Collection

In the web browser, we will see the UI of our app immediately update to show the new item, it just happens automatically for us.

```
meteor mongo

db.experiences.insert({ title: "My First Experience", createdAt: new Date() });
db.experiences.insert({ title: "My Second Experience", createdAt: new Date() });
db.experiences.insert({ title: "My Third Experience", createdAt: new Date() });
```
