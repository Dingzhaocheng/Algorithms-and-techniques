function stack(){
	let items = [];
	this.push = function(element){
	   items.push(element);
	}
	this.pop = function(){
		return items.pop();
	}
	this.peek =function(element){
	  return items[items.length - 1]
	}
	this.size = function(){
		return items.length;
	}
	this.clear = function(){
		items = [];
	}
	this.isEmpty = function(element){
		return items.length === 0;
	}
	this.print = function(){
		console.log(items.toString());
	}
}