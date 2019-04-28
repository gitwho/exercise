import React from 'react'

import {Link, Route} from 'react-router-dom'

export default function(props) {
  // children 不管路径是否匹配到都能执行
  return <Route path={props.to} exact={props.exact||false} children={(p)=> {
    console.log(p)
    return <li className={p.match?'active':''}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  }}>

  </Route>
}