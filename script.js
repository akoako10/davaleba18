function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("rame dawereeeeeeee");
    } else {
      document.getElementById("activity").appendChild(li);
    }
    
  }
  