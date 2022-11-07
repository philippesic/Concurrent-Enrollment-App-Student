import {useEffect, useState} from 'react';
import {get} from './useGetPost';

export function onMount(call) {
  useEffect(()=>{call()},[]) 
}


export function onChange(call, dep) {
  const dependencies = Array.isArray(dep) ? dep : [dep]
  useEffect(()=>{call()}, dependencies) 
}


export function useFetchOnMount(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  const fetchData = async() => {
    const [res, err] = await get(url);
    setData(res);
    setError(err) 
  }
  onMount(fetchData);
  
  return [data, error];
}

export function useFetchOnChange(url, dep) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  const fetchData = async() => {
    const [res, err] = await get(url);
    setData(res);
    setError(err) 
  }
  onChange(fetchData, dep);
  
  return [data, error];
}
