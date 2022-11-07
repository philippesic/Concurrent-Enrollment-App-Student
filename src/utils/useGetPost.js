import axios from 'axios';

export async function get(url, params) {
  let [data, error] = [null, null];
  await axios.get(url, {params : params})
    .then((res)=>{
      res.data._error ? error = res.data : data = res.data; 
    })
    .catch((e)=>{
      error = e
      error.message += ' GET ' + url;
    })
  
  return [data, error];
}


export async function post(url, body) {
  let [data, error] = [null, null];
  await axios.post(url, body)
    .then((res)=>{
      res.data._error ? error = res.data : data = res.data; 
    })
    .catch((e)=>{
      error = e
      error.message += ' POST ' + url;
    })
  
  return [data, error];
}
