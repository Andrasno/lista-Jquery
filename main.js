
 
$(document).ready(function(){



    $('form').on('submit', function(e){
        e.preventDefault();
       
        var conteudoDigitado = $('#conteudoDigitado').val();
        var lista = $('<li style="list-style-type: none"></li>');

        $(`<p style="cursor:pointer">${conteudoDigitado}</p>`).appendTo(lista);
        
        $(lista).appendTo('.list')

        $( "p" ).click(function() {
            $(this).css("text-decoration", "line-through");
            
          });

          $( "p" ).dblclick(function() {
            $(this).css("text-decoration", "none");
            
          });
               
    })

  
          
})
    

