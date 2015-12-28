/**
 * Nama  : Moch Deden
 * Kelas : A2
 * Npm   : 41155050140062
 */
 "use strict";

 function DoubleNode(before, item, after) {
   this.before = before;
   this.item = item;
   this.after = after;
 }

// Double Linked List
function DoubleLinkedList() {
 this.head = null;
}

DoubleLinkedList.prototype.insertAfter = function(pivot, item) {
  if (this.head) {
    for (var i = this.head; i != null; i = i.after) { 
      if(i.item == pivot) {
        if(i.after) {
          i.after = new DoubleNode(i, item, i.after);
        }
        else {
          i.after = new DoubleNode(i, item, null);
        }
        break;
      }
    }
  } else {
    this.head = new DoubleNode(null, item, null);
  }
};

DoubleLinkedList.prototype.deletePost = function(item) {  
  if (this.head.item == item) {
    this.head = this.head.after;
  } else {
    for (var i = this.head; i != null ; i = i.after) {
      if(i.item == item) {  
        if(i.after) {
          i.before.after = i.after;
          i.after.before = i.before;
        } else {
          i.before.after = null;
        }
      }
    }
  }
};


DoubleLinkedList.prototype.displayAll = function(action) {
  for (var i = this.head; i != null; i = i.after) 
    action(i.item);
}


// Circular Double Linked List

function CircularDoubleLinkedList() {
  this.head = null;
}

CircularDoubleLinkedList.prototype.insertAfter = function(pivot, newItem) {
  if(this.head) {
    for (var i = this.head; ; i = i.after) { 
      if(i.item == pivot) { 
        const afterNode = i.after;
        const newNode = {before: i, item: newItem, after : i.after}; 
        i.after = newNode;
        if(afterNode == this.head) {
          this.head.before = newNode;  
        }
        break;
      }

    }
  } else {
    this.head = {item : newItem};
    this.head.after = this.head;
    this.head.before = this.head;
  }
};

CircularDoubleLinkedList.prototype.displayAll = function(action) {
  for (var i = this.head.before; ; i = i.before) 
    action(i.item);
}


CircularDoubleLinkedList.prototype.displayUntilFound = function(item, action) {
  for (var i = this.head.before; ; i = i.before) {
    action(i.item);
    if(i.item == item)
      break;
  }
}