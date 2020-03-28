/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.queue = [];
    this.head = -1;
    this.tail = -1;
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.queue[++this.tail] = x;
    if (this.queue.length === 1) this.head = 0;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    const element = this.queue[this.head];
    this.queue = this.queue.slice(this.head + 1);
    if (this.queue.length === 0) {
        this.head = -1;
        this.tail = -1;
    } else {
        this.head = 0;
        this.tail = this.queue.length - 1;
    }
    return element;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.queue[this.head];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.head === -1;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */