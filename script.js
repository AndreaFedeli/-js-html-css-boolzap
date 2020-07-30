$(document).ready(function(){
//scrivo una funzione per memorizzare il testo inserito nell imput
//e riportarlo nella finestra di messaggio del div relativo alla chat
  $('#text').keydown(function(){
        if(event.keyCode == 13 || event.which==13){
          invioMessaggio();
        }
  })
  function invioMessaggio(){
        var valoreInput = $('#text').val();
        console.log(valoreInput);
        var clone = $('.template .messaggio').clone();
        clone.addClass('inviato');
        clone.find('.paragrafo').append(valoreInput);
        $('.chat').append(clone);


        setTimeout(rispostaAutomatica,1000);
    }

    function rispostaAutomatica(){
        var clone2 = $('.template div').clone();
        clone2.addClass('ricevuto');
        clone2.find('.paragrafo').append("OK");
        $(".chat").append(clone2);


    }


    });




//PROCESSO PER IL MESSAGGIO DI INVIO

//creo clone del template
//var clone= $('.sent.p1').clone();

//aggiungo la classe
//clone.addClass('sent');

//inserisco testo con find
//clone.find('.paragrafo').append(valoreImput);

//inserimento nel Dom
//$('.chat').append(clone);

//COSì FUNZIONAVA
//$('.p1').text(valoreInput);
//$('.p1').show();


//PROCESSO PER LA RISPOSTA


//clono il template
//var risposta= $('.received.p2').clone();

//metto la classe
//risposta.addCLass('received');
//risposta.find('text').append('risposta');
//risposta.find('.paragrafo').append('ok');
//$('.chat').append(risposta);
