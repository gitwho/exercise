import React from 'react';
import Context from './context'
import { bindActionCreators } from 'redux';

let connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
  return () => {

    class Proxy extends React.Component {
      state = mapStateToProps(this.props.store.getState());
      componentDidMount() {
        this.unsub = this.props.store.subscribe(() => {
          this.setState(mapStateToProps(this.props.store.getState()))
        })
      }
      componentWillUnmount() {
        this.unsub();
      }
      render() {
        let mapDispatch;
        if (typeof mapDispatchToProps === 'object') { // 如果第二个参数传递的是对象，把对象进行包装
          mapDispatch = bindActionCreators(mapDispatchToProps, this.props.store.dispatch)
        }else {
          mapDispatch = mapDispatchToProps(this.props.store.dispatch)
        }
        
        return <Component {...this.state} {...mapDispatch}></Component>
      }
    }

    return <Context.Consumer>
      {({store}) => {
        console.log(store);
        
        return <Proxy store={store}></Proxy>
      }}
    </Context.Consumer>
  }
}

export default connect;