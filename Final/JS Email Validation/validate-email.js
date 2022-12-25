function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (inputText.value.match(mailformat)) {
        form1.text1.focus();
        return true;
    }
        alert ("You have entered an invalid email address!");   
        form1.text1.focus(); 
    return false;   }
