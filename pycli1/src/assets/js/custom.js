function movetoNext(current, nextFieldID) {  
    if (current.value.length >= current.maxLength) {  
    document.getElementById(nextFieldID).focus();  
    }  
    } 


    function movetoprevious(current, preFieldID) {  
        if (current.value.length <= current.minLength) {  
        document.getElementById(preFieldID).focus();  
        }  
        } 
