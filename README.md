# Store.ts

Storage abstraction for Typescript projects. **I have no idea how I want this to work yet!**

# Basic Usage

Everything you need to go to get up and running quickly.

**Store.ts** is modeled after other data storage systems, exposing the following API. Each method returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

```javascript
// Imagine we have the following basic data collection of users
let users = [new User({ "key": 0, "name": "Tom"}), new User({ "key": 1, "name": "Dick"})];

// Create a new Store, seed it with our existing users
// By default, a store looks for the property "key" to use as its primary key
// You can set a different property to be the key by using 'keyProperty'
let store = new Store<User>({ data: users });

// Add a new user
let key = await store.put({ "key": 2 "name": "Harry" });

// Get an existing user
let harry = await store.get(key);

// Update "Tom" to be "Steve"
let key = await store.put({ "key": 0, "name": "Steve" });

// Loop over the entire collection
store.forEach((user) => ({
    console.log(user);
});

// Get the entire collection as an array
await store.fetch();

// Remove an existing user
store.delete();

// Clear the collection
store.clear();
```

## Installation

using npm:
```javascript
// Import the Store module
import Store from 'store-ts';

// Create a new instance of Store
let store = new Store();
store.put({ "name": "Harry" });
```

# Roadmap

- [ ] Plugin System
- [ ] Storage Adapter System
- [ ] Test Cases
- [ ] API Documentation

# Plugins

## Track
Returned objects give information about their location in the collection
## Query
Client-side query functions

```javascript
store.fetch().where(x => x.name == "Tom");
```

## Sync
Allow the use of syncronous methods
## Events
Emit events on add, update, delete

# Storage adapters

## Memory
## IndexedDB
## LocalStorage

# Contributing