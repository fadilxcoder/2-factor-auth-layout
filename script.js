document.addEventListener("DOMContentLoaded", function(event) {
    
    var $tokenField     = document.getElementById('token');
    var $btn            = document.getElementById('submit');
    
    $tokenField.setAttribute("minlength", "6");
    
    $btn.addEventListener('click', function(event) {
        callback(event, $tokenField);
    }, true);
    
});

 function callback(e, t) {
     
     e.preventDefault();
     
     var $form      = document.getElementById('form-token');
     var $formData  = new FormData($form);
     
     for(let [$name, $value] of $formData) {
         /*
         console.log($name);    // DISPLAY +>   token
         console.log($value);   // DISPLAY =>   The 6 digits entered in input
         */
         validation($value, t);
     }

}

function validation(data, tokenField) {
    
    var $display   = document.getElementById('show-token');
    
    if ('' == data || 6 != data.length) {
        tokenField.style.borderBottomColor  = 'red'
    } else {
        tokenField.style.borderBottomColor  = '#0d0e0e';
        notify(data);
        $display.innerHTML = data;
    }
}

function notify(data)
{
    navigator.serviceWorker.register('sw.js');
    Notification.requestPermission( function(result) {
        if (result === 'granted') {
            navigator.serviceWorker.ready.then( function(registration) {
                registration.showNotification( '2 Factor Authenticaion', {
                    body    : 'Your 6 digits are : '+data,
                    vibrate : 300,
                });
            });
        }
    });
}