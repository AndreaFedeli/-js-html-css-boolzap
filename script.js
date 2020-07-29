$(document).ready(function(){
//scrivo una funzione per memorizzare il testo inserito nell imput
//e riportarlo nella finestra di messaggio del div relativo alla chat
  $('#text').keydown(function(event){
        if(event.keyCode == 13){
            var valoreInput = $('#text').val();
            $('.p1').text(valoreInput);
            $('.p1').show();


            setTimeout(function(){

                var risposta = 'ok';

                $('.p2').text(risposta);
                $('.p2').show();
            }, 3000);
        }
    })
});
