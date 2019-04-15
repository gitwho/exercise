// 默认是批量更新的
let isBatchingUpdate = true; //默认是批量更新的
let transcation = (component) => {
  component.state = component.pendingState; //更新状态
  component.render(); 
  isBatchingUpdate = false
}
class My {
  constructor() {
    this.state = {number: 0}  // 自己的状态
    this.pendingState = {...this.state}
  }
  setState(obj) {
    if (isBatchingUpdate) {
      this.pendingState = {...this.pendingState, ...obj}; // 对象合并
    }else {
      this.pendingState = {...this.pendingState, ...obj}; // 对象合并
      transcation(this) // 同步数据，更新视图
    }
    
  }
  update() {
    // 有 setTimeout 批量更新
    // 没有setTimeout 点一次更新一次
    // setTimeout(() => {
      this.setState({number: this.state.number + 1});
      this.setState({number: this.state.number + 3});
      this.setState({number: this.state.number + 2});
    // }, 0)
    transcation(this); // this -> My当前实例
  }
  render() {
    console.log(this.state.number);
  }
}

let my = new My();
// 内部会先调用更新方法
my.update();