(function(window, document, undefined) {  
    window.onload = init;
  
    function init(){
        const table = document.getElementById("courses");
        const data = table.getElementsByTagName("td");
        for(let i = 0; i < data.length; i++) {
            var color ="#" + Math.floor(Math.random() * 16777215).toString(16);
            data[i].style.color = color
        }
    }
  
  })(window, document, undefined);