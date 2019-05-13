// 上拉加载
// ele 要实现此功能的dom对象 callback加载更多方法
export function loadMore(element, callback) {
  console.log(element)
  element.addEventListener('scroll', function(){
    timer&&clearTimeout(timer);
    let timer = setTimeout(function(){
      let clientHeight = element.clientHeight; // 可视区高度
      let scrollTop = element.scrollTop; // 向上滚动高度
      let scrollHeight = element.scrollHeight; // 内容高度
      // console.log(clientHeight, scrollTop, scrollHeight);
      if (clientHeight + scrollTop + 20 >= scrollHeight) {
        callback();
        console.log('callback')
      }
    }, 300)
  })
  
}
// 下拉刷新
export function downRefresh(element, callback){
  let startY; //刚按下的初始坐标
  let distance; //下拉的距离
  let originTop = element.offsetTop; // 最初的距离离父级顶部的距离
  element.addEventListener('touchstart', function(e){
    // 在最顶端，才监听手势
    console.log(element.offsetTop, element.scrollTop)
    if(element.offsetTop == originTop && element.scrollTop == 0){
      startY = e.touches[0].pageY;
      element.addEventListener('touchmove', touchMove);
      element.addEventListener('touchend', touchend);
    }

    function touchMove(e){
      // 判断下拉还是上拉
      let pageY = e.touches[0].pageY;
      if (pageY > startY) { // 下拉
        // 求移动距离
        distance = pageY - startY;
        // 改变 dom 的top值
        element.style.top = originTop + distance + 'px';
      }else{ // 上拉就取消监听
        element.removeEventListener('touchmove', touchMove);
        element.removeEventListener('touchend', touchend);
      }
    }

    function touchend(){
      // 取消监听
      element.removeEventListener('touchmove', touchMove);
      element.removeEventListener('touchend', touchend);
      // 动画
      // 法1：css
      // element.style.transition = 'all 1s ease-in';
      // element.style.top = originTop + 'px';
      // 法2： js
      let timer = setInterval(function(){
        if (distance<1){
          element.style.top = originTop + 'px';
        } else {
          element.style.top = originTop + (--distance) + 'px';
        }
      }, 5)
      if(distance > 30) {
        callback();
      }
    }
  })
}