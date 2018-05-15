var i;
var li = document.querySelector('ul');
li.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    var div = ev.target;
    div.style.display = "none";  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("No Task Given");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("input").value = "";
  var txt = document.createTextNode("\u00D7");
}
