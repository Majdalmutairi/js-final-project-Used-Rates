$(document).ready(function(){

  $('#submit').on('click', function(event) { 
    $('#rate_timestamp').text('')
    $('#rate_result').text('')
    var entered_amount = $('#amount').val();

    if(entered_amount <=0 ){ 
      alert("Enter valid amount");
      return false;
    }

    
    $.ajax({
      method: 'GET',
      url: 'http://apilayer.net/api/live?access_key=86a8b0c992056da0aa282732c631049b',
      
      success:function(results)
      {

       
        var date = new Date(results.timestamp);
        $('#rate_timestamp').append('<h4 style="color:black;">Timestamp: ' + date+'</h4')

        
        $.each(results.quotes, function(key, key_value) {
          $('#rate_result').append('<tr>')
          $('#rate_result').append('<td>'+ key.substring(3) +'</td>')
          $('#rate_result').append('<td>'+ (entered_amount*key_value) +'</td>')
          $('#rate_result').append('</tr>')
        });

      },
      error: function(error) {
        console.log('error usd rates');
        console.log(error);}
    });

    event.preventDefault();
  });

});