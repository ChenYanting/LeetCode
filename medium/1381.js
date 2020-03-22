/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.stack.length < this.maxSize) {
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    return this.stack.length > 0 ? this.stack.pop() : -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    for (let i = 0; i < k && i < this.stack.length; i++) {
        this.stack[i] += val;
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
const stack = new CustomStack(3);
stack.push(1);
stack.push(2);
stack.pop();
stack.push(2);
stack.push(3);
stack.push(4);
stack.increment(5, 100);
stack.increment(2, 100);
stack.pop();
stack.pop();
stack.pop();
stack.pop();