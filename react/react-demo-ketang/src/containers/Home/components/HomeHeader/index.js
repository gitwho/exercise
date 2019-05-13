import React,{Component} from 'react'
import './index.less'
import logo from '@/images/avator.png'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

export default class HomeHeader extends Component{
  state = {
    menuShow:false
  }
  changeCategory = (e) => {
    let category = e.target.dataset.category;
    this.props.changeCategory(category);
    this.setState({menuShow:false});
    this.props.refreshLessons();
  }

  render() {
    return (
      <div className="home-header">
        <div className="header-menu">
          <img src={logo} alt="" />
          <div onClick={()=>this.setState({menuShow:!this.state.menuShow})}>
            {
              this.state.menuShow?<i className="iconfont icon-shanchu"></i>:
            <i className="iconfont  icon-ai-kind"></i>
            }  
          </div>
        </div>
        
        <TransitionGroup>
            {
              this.state.menuShow&&(
                <CSSTransition
                  timeout={500}
                  classNames="fade"
                >
                  <ul className="home-menus" onClick={this.changeCategory}>
                    <li data-category="react" className={this.props.category=="react" ? "active": ""}>react</li>
                    <li data-category="vue" className={this.props.category=="vue" ? "active": ""}>vue</li>
                  </ul>
                </CSSTransition>
              )
            }
        </TransitionGroup>
      </div>
    )
  }
}