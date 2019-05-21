// import { get } from "http";
const DOMAIN = 'http://localhost:3000'
export function get(url){
  
  // json方法把响应体转成json
  return fetch(DOMAIN+url,{
    method: 'GET',
    // 必须指定此参数才能发送cookie
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(response => response.json()); // 返回promise
}

export function post(url, body){
  return fetch(DOMAIN+url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
}
