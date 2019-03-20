// reduce 实现
Array.prototype.reduce = function (callback, prev) {
    for (let i=0;i<this.length;i++){
        if(typeof prev != 'undefined'){
            prev = callback(prev, this[i], i, this);
        }else {
            // 第一次没有prev 但是下一次有这个prev 需要把索引往后移动一位
            prev = callback(this[i], this[i+1], i+1, this);
            i++;
        }
    }
    return prev;
}

let t = [{price: 10, count: 10}, {price: 2, count: 5}, {price: 3, count: 4}].reduce((prev, current) => {
    return prev + current.price * current.count
});
console.log(t);
