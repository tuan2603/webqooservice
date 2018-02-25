//             retail
$(document).ready(function(){
    

             $('#txtRetail').hide();
                $('#yesR').click(function(){
                   $('#txtRetail').show();
                });
                $('#noR').click(function(){
                   $('#txtRetail').hide(); 
            });
//             any
              $('#txtAny').hide();
                $('#yesA').click(function(){
                   $('#txtAny').show();
                });
                $('#noA').click(function(){
                   $('#txtAny').hide(); 
                });

//             format mm dd yyyy-> dd mm yyyy
           
            $('.birthday').datepicker({ dateFormat: 'dd-mm-yy' }).val();
   });                                    
//             test provider
            function testProvider(){
                var emailP=document.getElementById('PtxtMAil').value;
                var cemailP=document.getElementById('PtxtCMAil').value;
                var passP=document.getElementById('PtxtPass').value;
                var cpassP=document.getElementById('PtxtCPass').value;
                if(emailP != cemailP){
                    document.getElementById('testmailProvider').innerHTML="Your confirmation email does not match";
                    return false;
                }
                else{
                    document.getElementById('testmailProvider').innerHTML='';
                }
                if(passP != cpassP){
                    document.getElementById('testpassProvider').innerHTML="Your confirmation password does not match";
                    return false;
                }else{
                    document.getElementById('testpassProvider').innerHTML='';
                }
            }
//             test member
            function testMember(){
                var emailM=document.getElementById('MtxtMAil').value;
                var cemailM=document.getElementById('MtxtCMAil').value;
                var passM=document.getElementById('MtxtPass').value;
                var cpassM=document.getElementById('MtxtCPass').value;
                if(emailM != cemailM){
                    document.getElementById('testmailMember').innerHTML="Your confirmation email does not match";
                    return false;
                }else{
                    document.getElementById('testmailMember').innerHTML='';
                }
                if(passM != cpassM){
                    document.getElementById('testpassMember').innerHTML="Your confirmation password does not match";
                    return false;
                }else{
                    document.getElementById('testpassMember').innerHTML='';
                }
            }
            