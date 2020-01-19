/* Class conundrum - Bug Fixing #7

Oh no! Timmy's List Class has broken! Can you help timmy and fix his class? Timmy has a List class he has created, this is used for type strict arrays (which timmy calls Lists).
When timmy calls the Count property of the list it still remains at 0 when adding items.
Also it fails when timmy trys to chain the adds e.g. ```javascript myList.add(0).add(1) ``` ```coffeescript myList.add(0).add(1) ``` ```python my_list.add(0).add(1) ``` ```ruby my_list.add(0).add(1) ```  */

////////////////////////////Solution////////////////////////////

class List {
    constructor(type) {
      this.type = type;
      this.items = [];
    }
    get count() {
      return this.items.length;
    }
    add(item){
      if(typeof item != this.type)
        return `This item is not of type: ${this.type}`;
        
      this.items.push(item);
      return this;
    }
  }