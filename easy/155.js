/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.index = -1;
    this.stack = [];
    this.min = Number.POSITIVE_INFINITY;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack[++this.index] = x;
    this.min = Math.min(this.min, x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack = this.stack.slice(0, this.index--);
    this.min = Math.min(...this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.index];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
minStack.pop();
minStack.top();
minStack.getMin();