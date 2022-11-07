# Hooks.useDatabase

`useDatabase` is a custom hook that connects you to a backend database for student projects. This database uses MongoDB Atlas to allow you easily store your javascript object. 


## Getting Started

### `useDatabase(database, collection)`
After importing the `Hooks` library, call `Hooks.useDatabase(database, collection)` inside your component and save the return value as a `const`. The first parameter is the name of your team database. Team databases must start with the prefix `team_`. The second parameter is the name of the collection inside your database. If the either the database or the collection does not exist a new database or collection will be created if the names are valid. 

```javascript
import {Hooks} from '../utils'

export default function Countries() {
  const db = Hooks.useDatabase('sample_countries', 'countries');
  ...
}
```
   
### Sample Databases

Sample databases have been added to the databases for you to explore. Sample databases begin with the prefix `sample_`. Sample database collections values can be read but can not be modified in any way.

### Return Value

Calling `useDatabase` will return an object with the following structure:
```javascript
{
  database: string, 
  collection: string, 
  result: Object, 
  error: Error,
  dirty: boolean,
  setDatabase: (string) => void, 
  setCollection: (string) => void,
  insertOne: (doc) => Promise,
  insertMany: (docs) => Promise,
  findOne: (filter, options: {limit, sort, projections}) => Promise,
  findMany: (filter, options: {limit, sort, projections}) => Promise,
  fetchAll: (options: {limit, sort, projections}) => Promise, 
  updateOne: (filter, set) => Promise, 
  updateMany: (filter, set) => Promise, 
  deleteOne: (filter) => Promise, 
  deleteMany: (filter) => Promise,
  list: (void) => Promise, 
}
```

## Properties

The object returned from calling `useDatabase` will have the following properties: 
### `database: string` 
> The name of the connected database. Change the connected database using `setDatabase`. 
### `collection: string`
> The name of the connected collection. Change the connected collection using `setCollection`.
### `result: Object`
> The result from the last database request or `null` if the request failed
### `error: Error`
> The error from the last database request or `null` if the request succeeded. Tip: Use the `ErrorAlert` component to debug database errors in your app.
### `dirty: boolean`
> A flag indicating whether any changes were made to the current collection by the client. **WARNING: the flag does not watch for changes on the server. Only changes made by the client.**  Future work may be done to watch for changes on the server. 

## Making Database Requests

Database requests are sent from the client application to the backend server. The results of the requests are not immediately available as with normal function calls. Therefore, database requests should be handled asynchronously. Use `await` to wait for the request to complete and return the results. 



## 1.  Insert Requests
The following are functions available to insert documents into the database:
### `insertOne(doc)`
> Inserts a single document into a collection. The first parameter 

```javascript
  const db = Hooks.useDatabase('team_x', 'todo_items');
  
  const insertItem = async(value)=> {
    const item = {text: value, complete: false, timestamp: Date.now()}
    await db.insertOne(item);
  }
```

###  `insertMany(docs)`
> Inserts multiple documents (array) into a collection. 
```javascript
const docs = [
  { title: 'Dangal', rating: 'Not Rated' },
  { title: 'The Boss Baby', rating: 'PG' }
 ];
await db.insertMany(docs);
```

## 2. Find/Fetch Requests

Find/fetch requests will return documents stored in the collection. A maximum of 250 documents is imposed to limit the load on the server.

### `findOne(filter, options)`
>Returns one document that satisfies the specified filter criteria on the collection. If multiple documents satisfy the filter, this method returns the first document.

```javascript
const data = await db.findOne({ title: 'Hamlet' })
```

### `findMany(filter, options)`
> Returns an array of all documents that satisfies the specified filter criteria on the collection.

The following request will return all documents with a `year` field greater than 2005. 
```javascript
const data = await db.findMany({ year: {$gt: '2005'} })
```
You can find more filter/query `$operators` in the [MongoDb manual](https://www.mongodb.com/docs/manual/reference/operator/query). 


### `fetchAll(options)`
>Returns an array of all documents in the collection.

```javascript
const data = await db.fetchAll()
```

### Options
By default, queries return all fields in matching documents in the order stored in the database. You can limit and sort what is returned by providing an `options` paramter with the following properties:
- `projections`
  > Limit the amount of data that is returned by providing a projections object to specify which fields to return.
- `sort`
  > Sort the documents returned based on acending or decending values of a specified field 
- `limit`
  > Specify the maximum number of documents to return

The following fetch request will return only the `name`, `flags` and `population` fields and drop all other fields. The results will be sorted by `population` descending (-1), and return at most 10 documents from the collection.

```javascript
const options = {
  projection: {name: 1, flags: 1, population: 1},
  sort: {population: -1},
  limit: 10
}
const data = await db.fetchAll(options);
```
More options will be available in the future.


## 3. Update Requests
The following functions available to update documents from the database.

### `updateOne(filter, set)`
> Updates a single document within the collection based on the filter.

The following request will look for a document with a title of 'Amadeus' and set it's rating field to 9.5.
```javascript
await db.updateOne({ title: 'Amadeus' }, { rating: 9.5 });
```

### `updateMany(filter, set)` 
> Updates all documents within the collection based on the filter.

The following request will update all documents that are rated 'G' to have a rating of 10 and a review of 'excellent movie!'
```javascript
await db.updateMany({ rated: "G" }, { rating: 10, review: 'excellent movie!' });
```


## 4. Delete Requests

The following functions available to remove documents from the database.

### `deleteOne(filter)`
> Removes a single document that matches the filter from a collection. If multiple documents satisfy the filter, this method will remove the first matching document.

The example below shows a function that takes an object and deletes it from the collection. If you pass the entire document fetched from the database to the function below, the document `_id` will be used to as the only filter.
```javascript
const deleteItem = async(item)=> {
  await db.deleteOne(item)
}
```

### `deleteMany(filter)`
> Removes all documents that match the filter from a collection.

The following request will delete all of the documents in the collection since no filter is provided.
```javascript
  await db.deleteMany();
```

## 5. Additional Functions

### `setDatabase(name)` 
> Change the connected database
```javascript
db.setDatabase('team_x')
```
### `setCollections(name)` 
> Change the connected collection
```javascript
db.setCollection('movies')
```

### `list()` 
> Returns an array of names of collections available in the connected database.
```javascript
const collections = await db.list()
```
