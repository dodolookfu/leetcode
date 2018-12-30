var RecentCounter = function() {
  this.queue = [];  
};
/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {  
  this.queue.push(t);  
  let min = t - 3000;  
  while( this.queue[0] < min) {        
    this.queue.shift();
  }
  return (this.queue.length);
};
/** 
* Your RecentCounter object will be instantiated and called as such:
* var obj = Object.create(RecentCounter).createNew()
* var param_1 = obj.ping(t)
*/