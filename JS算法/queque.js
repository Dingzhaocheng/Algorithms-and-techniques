function Queque(){
	let items = [];
	this.enqueue = function(element){
		items.push(element);
	}
	this.dequeue = function(){
		return items.shift();
	}
	this.front = function(){
		return items[0]
	}
}