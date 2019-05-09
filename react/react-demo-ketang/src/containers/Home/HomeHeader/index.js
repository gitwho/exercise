import React,{Component} from 'react'
import './index.less'
import logo from '@/images/avator.png'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

export default class HomeHeader extends Component{
  state = {
    showList:false
<<<<<<< HEAD
  }
  changeCategory = (e) => {
    let category = e.target.dataset.category;
    this.props.changeCategory(category);
  }
=======
}
>>>>>>> 0838e1b400baf3fbc63bed0b60bbe82e030e58a7
  render() {
    return (
      <div className="home-header">
        <div className="header-menu">
          <img src={logo} alt="" />
          <div onClick={()=>this.setState({showList:!this.state.showList})}>
            {
              this.state.showList?<i className="iconfont icon-shanchu"></i>:
            <i className="iconfont  icon-ai-kind"></i>
            }  
          </div>
        </div>
        
        <TransitionGroup>
            {
              this.state.showList&&(
                <CSSTransition
                  timeout={500}
                  classNames="fade"
                >
<<<<<<< HEAD
                  <ul className="home-menus" onClick={this.changeCategory}>
                    <li data-category="react">react</li>
                    <li data-category="vue">vue</li>
=======
                  <ul>
                    <li>react</li>
                    <li>vue</li>
>>>>>>> 0838e1b400baf3fbc63bed0b60bbe82e030e58a7
                  </ul>
                </CSSTransition>
              )

            }
        </TransitionGroup>
      </div>
    )
  }
}