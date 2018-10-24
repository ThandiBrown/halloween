


function start(){
  
}


function printPkg(clicked_button){
  var node = getNode();
  switch(clicked_button){
    case "a":
      const temp_node_a_pkg = map.get(node.choice_a.next);
      update_Site(temp_node_a_pkg);
      break;
    case "b":
      break;
    case "c":
      break;
    case "d":
      break;
  }

}

function textPackage(prompt, choice_a, choice_b, choice_c, choice_d, name, prevNode) {
  var choiceValue = name.slice(-1);
  switch(choiceValue){
    case "a":
      prevNode.choice_a.next = name + "_ptr";
      break;
    case "b":
      prevNode.choice_b.next = name + "_ptr";
      break;
    case "c":
      prevNode.choice_c.next = name + "_ptr";
      break;
    case "d":
      prevNode.choice_d.next = name + "_ptr";
      break;
  }
  this.name = name;
  this.prompt = prompt;
  this.choice_a = new choiceNode(choice_a, null);
  this.choice_b = new choiceNode(choice_b, null);
  this.choice_c = new choiceNode(choice_c, null);
  this.choice_d = new choiceNode(choice_d, null);
}

function choiceNode(choiceName, next) {
  this.choiceName = choiceName;
  this.next = next;
}

function update_Site(the_node){
  setNode(the_node);
  document.getElementById("demo").innerHTML = the_node.prompt;
  document.getElementById("a").innerText = the_node.choice_a.choiceName;
  document.getElementById("b").innerText = the_node.choice_b.choiceName;
  document.getElementById("c").innerText = the_node.choice_c.choiceName;
  document.getElementById("d").innerText = the_node.choice_d.choiceName;
}

function setNode(the_node){
  main_node = the_node;
}

function getNode(){
  return main_node;
}
