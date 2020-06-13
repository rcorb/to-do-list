document.getElementById("add").onclick = function() {
  var text = document.getElementById("input").value;
  var li = "<li>" + text + "<button onclick='deleteItem(this)'>Delete</button></li>";
  document.getElementById("list").insertAdjacentHTML('beforeend', li);
  document.getElementById("input").value = ""; // clear the value
}

function deleteItem(btn){
  btn.parentNode.parentNode.removeChild(btn.parentNode)
}
