//déclare une varible puis attribut la fonction clic a mon bouton puis acrémente en +1 et décremente en -1 
var clickCount=0;
$(document).ready(function(){
    $('#clickplus').click(function(){
        clickCount++;
        $('#result').attr('value',clickCount);
    });
});
var clickCount=0;
$(document).ready(function(){
    $('#clickmoins').click(function(){
        clickCount--;
        $('#result').attr('value',clickCount);
    });
});
