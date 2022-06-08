function verify () {
    const reg = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/;
    var boxvalue = document.getElementById("inputbox").value
    var value = reg.test(boxvalue);
    var text = document.getElementById('textdiv');
    text.style.fontSize = '25px';
    text.style.backgroundColor = 'transparent';

   if (value == true) {
            text.innerHTML = "valid";
            text.style.color = 'darkgreen';
            text.style.fontFamily = "'Courier New', Monospace"
            
            
        } else {
            text.innerHTML = "try again";
            text.style.width = "200px"
            text.style.color ="red";

    }

}
    
   
    
    
    




