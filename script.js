document.addEventListener("DOMContentLoaded", function(event) { 
    event.preventDefault;
    var $btn = document.getElementById('submit');
    for (var $i=0; $i<$btn.length; $i++) {
        console.log(document.getElementById('token').value);
    }
    
});