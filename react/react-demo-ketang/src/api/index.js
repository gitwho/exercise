// import { get } from "http";
const DOMAIN = 'http://localhost:3000'
export function get(url){
  // json方法把响应体转成json
  return fetch(DOMAIN+url).then(response => response.json()); // 返回promise
}

export function post(url, body){
  return fetch(DOMAIN+url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  });
}
