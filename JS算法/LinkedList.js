/*链表相较于数组更为灵活,而且数组在长度指定的情况下不能轻易的添加元素,
链表则没有这个限制---
链表是一种动态的数据结构，不同于数组的是，
链表分配内存空间的灵活性，它不会像数组一样被分配一块连续的内存。
当你想在数组的任意位置，插入一个新值的时候，必须对数组中的各个元素
进行相应的位置移动才能达到目标，开销显然是很大的。然而链表的灵活性在于
它的每个元素节点分为两部分，一部分是存储元素本身，另一部分是指向下一个
节点元素的引用，也可以称为指针，当你要插入数据时，把上一个节点的向下
指针指向新数据节点，新数据节点的向下指针指向原有数据。
但是链表不像数组那样可以直接通过索引立刻定位，只能通过遍历。
*/

function LinkedList(){
	let Node = function(elements){
		this.elements = elements;
		this.next = null;		
	}
	let length = 0;
	let head = null;
	this.append = function(elements){
		let node = new Node(elements);
		let current;
		if (head = null){
			head = node;
		}else{
			current = head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		length++;
	}
}