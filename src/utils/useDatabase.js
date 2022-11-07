import {useState} from 'react'
import {post} from './useGetPost'
const SERVER_URL='https://backend.leonyoung.repl.co/api/db';


export function useDatabase(_database, _collection) {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [dirty, setDirty] = useState(false);
  const [database, _setDatabase] = useState(_database);
  const [collection , _setCollection] = useState(_collection);

  function setDatabase(name) {
    reset();
    _setDatabase(name);
  }

  function setCollection(name) {
    reset();
    _setCollection(name);
  }

  function reset() {
    setResult(null);
    setError(null);
    setDirty(false);
  }

  function fixId(filter) {
    return filter && filter._id ? {_id: filter._id} : filter
  }
  
  async function send(url, body, isDirty) {
    if(!body) body = {};
    body.database = database;
    body.collection = collection;
    reset();
    const [data, err] = await post(url, body);
    if (err) {
      setError(err);
      return null;
    }
    else {
      setResult(data);
      setDirty(isDirty);
    }
    return data;
  }
  
  async function list() {
    const url = SERVER_URL + "/list";
    return await send(url, {}, dirty);
  }
  
  //create unique? check replace if filter includes _id
  async function insertOne(doc) {
    const url = SERVER_URL + "/insertOne";
    const body = { doc: doc }
    return await send(url, body, true);
  }

  async function insertMany(docs) {
    const url = SERVER_URL + "/insertMany";
    const body = { docs: docs }
    return await send(url, body, true);
  }
  
  async function findOne(filter) {
    const url = SERVER_URL + "/findOne";
    const body = { filter: fixId(filter)}
    return await send(url, body, false);  
  }
  
  async function findMany(filter, options) {
    const url = SERVER_URL + "/findMany";
    const body = { filter: fixId(filter), options }
    return await send(url, body, false);
  }
  
  async function fetchAll(options) {
    const url = SERVER_URL + "/findMany";
    const body = { options }
    return await send(url, body, false);
  }
  
  async function updateOne(filter, set) {
    const url = SERVER_URL + "/updateOne";
    const body = { filter: fixId(filter), set: set }
    return await send(url, body, true);
  }
  
  async function updateMany(filter, set) {
    const url = SERVER_URL + "/updateMany";
    const body = { filter: fixId(filter), set: set }
    return await send(url, body, true);
  }

  async function deleteOne(filter) {
    const url = SERVER_URL + "/deleteOne";
    const body = { filter: fixId(filter) }
    return await send(url, body, true);
  }
  
  async function deleteMany(filter) {
    const url = SERVER_URL + "/deleteMany";
    const body = { filter: fixId(filter) }
    return await send(url, body, true);
  }

  return {
    database, setDatabase, 
    collection, setCollection,
    insertOne, insertMany,
    findOne, findMany,
    updateOne, updateMany,
    deleteOne, deleteMany,
    list, result, error,
    fetchAll, dirty
  }
}
  
export default useDatabase;