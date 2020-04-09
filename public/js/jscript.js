
 

   // alert(665);
    $(document).ready(function() {
  
        $('.drugs').click(function(){
	
            var  id=($(this).attr('id'));
             alert(id);
             $('#jambno').val(id);
           // $('#vidviews').attr('src', srcs);
            //$('#gg').html(srcs);
        });


       
            $("#datefrom").on("change",function(){
                var datefrom = $(this).val();
                var dateto=$('#dateto').val();
               // $(selected).datepicker({ dateFormat: "yy-mm-dd" });
              if(dateto !==""){
                $.ajax({
                    url: "search_range.php",
                    type: 'POST',
                    data: {datefrom:datefrom,dateto:dateto},
                     cache: false,
                    success: function (data) {
                       $('.tables').html(data);
                        //$('.alls').html(data);
    
                    }
                });
              }
              
            });

            $("#dateto").on("change",function(){
                var dateto = $(this).val();
                var datefrom=$('#dateto').val();
               // $(selected).datepicker({ dateFormat: "yy-mm-dd" });
              if(datefrom !==""){
                $.ajax({
                    url: "search_range.php",
                    type: 'POST',
                    data: {datefrom:datefrom,dateto:dateto},
                     cache: false,
                    success: function (data) {
                       $('.tables').html(data);
                        //$('.alls').html(data);
    
                    }
                });
              }
              
            });
       



            $('#qtycat').keyup(function(){
                var qtycat = $("#qtycat").val();
                var qp = $("#qp").val();
                var qsac = $("#qsac").val();

                var qtypack=qtycat*qp;
                var qtysack=qtypack*qsac;

               $("#qtypack").val(qtypack);
               $("#qtysack").val(qtysack);
    
    
            });

        
        //$('#search').on('blur',function(){
            $('#search').keyup(function(){
            var search = $("#search").val();
          //  alert(search);

            $.ajax({
                url: "search_tables.php",
                type: 'POST',
                data: {search:search},
                 cache: false,
                success: function (data) {
                    $('.tables').html(data);

                }
            });


        });
        $('#search2').keyup(function(){
            var search = $("#search2").val();
          //  alert(search);

            $.ajax({
                url: "search_sum.php",
                type: 'POST',
                data: {search:search},
                 cache: false,
                success: function (data) {
                    $('.tables').html(data);

                }
            });


        });

        $('#quaincat').keyup(function(){
            var quaincat=$('#quaincat').val();   
          var costpercatton=$('#costpercatton').val();  
          var nopack=$('#nopack').val();  
          var noSachet=$('#noSachet').val(); 
         
          if(quaincat==""){  
            quaincat=1;
          }
          if(costpercatton==""){  
            costpercatton=1;
        }
        if(nopack==""){  
            nopack=1;
        }
        if(noSachet==""){  
            noSachet=1;
        }
          
       var cppack=costpercatton/nopack;
      var cpsachetk=cppack/noSachet;
      //alert(cpsachetk);
      $('#packcost').val(cppack);
      $('#Sachetcost').val(cpsachetk);   
  

        });

        /////////////////////////

        $('#costpercatton').keyup(function(){
            // var quaincat = $("#quaincat").val();
            //alert(quaincat);
           var quaincat=$('#quaincat').val();   
           var costpercatton=$('#costpercatton').val();  
           var nopack=$('#nopack').val();  
           var noSachet=$('#noSachet').val(); 
                  
           if(quaincat==""){  
            quaincat=1;
          }
          if(costpercatton==""){  
            costpercatton=1;
        }
        if(nopack==""){  
            nopack=1;
        }
        if(noSachet==""){  
            noSachet=1;
        }
        var cppack=costpercatton/nopack;
        var cpsachetk=cppack/noSachet;
        
         $('#pircepercatton').val(costpercatton); 
        
        $('#profitpercatton').val(profitpercatton); 

        $('#packcost').val(cppack);
        $('#Sachetcost').val(cpsachetk);  
        var pirceperpack2=costpercatton/nopack;        
         $('#pirceperbuttle').val(cpsachetk); 
       
        
        $('#pirceperpack').val(pirceperpack2);  
        
 
         });

         ////////////////////////////////////

         $('#nopack').keyup(function(){
            // var quaincat = $("#quaincat").val();
            //alert(quaincat);
           var quaincat=$('#quaincat').val();   
           var costpercatton=$('#costpercatton').val();  
           var nopack=$('#nopack').val();  
           var noSachet=$('#noSachet').val(); 
           //var packcost=$('#packcost').val();  
           //var Sachetcost=$('#Sachetcost').val(); 
           if(quaincat==""){  
            quaincat=1;
          }
          if(costpercatton==""){  
            costpercatton=1;
        }
        if(nopack==""){  
            nopack=1;
        }
        if(noSachet==""){  
            noSachet=1;
        }
        var cppack=costpercatton/nopack;
        var cpsachetk=cppack/noSachet;
        //alert(cpsachetk);
        $('#packcost').val(cppack);
        $('#Sachetcost').val(cpsachetk);  
        var pirceperpack2=costpercatton/nopack;        
         $('#pirceperbuttle').val(cpsachetk); 
        $('#pircepercatton').val(costpercatton); 
        $('#pirceperpack').val(pirceperpack2);  
       
 
         });
         ////////////////////////////////////

         $('#noSachet').keyup(function(){
            // var quaincat = $("#quaincat").val();
            //alert(quaincat);
           var quaincat=$('#quaincat').val();   
           var costpercatton=$('#costpercatton').val();  
           var nopack=$('#nopack').val();  
           var noSachet=$('#noSachet').val(); 
     
           if(quaincat==""){  
            quaincat=1;
          }
          if(costpercatton==""){  
            costpercatton=1;
        }
        if(nopack==""){  
            nopack=1;
        }
        if(noSachet==""){  
            noSachet=1;
        }
              
        var cppack=costpercatton/nopack;
        var cpsachetk=cppack/noSachet;
        //alert(cpsachetk);
        $('#packcost').val(cppack);
        $('#Sachetcost').val(cpsachetk);  
        var pirceperpack2=costpercatton/nopack;        
         $('#pirceperbuttle').val(cpsachetk); 
        $('#pircepercatton').val(costpercatton); 
        $('#pirceperpack').val(pirceperpack2);  
       
         });

         $('#pircepercatton').keyup(function(){             
            var costpercatton=$('#costpercatton').val();
            var packcost= $('#packcost').val();
            var Sachetcost= $('#Sachetcost').val();

            var pircepercatton=$('#pircepercatton').val();
            var pirceperpack= $('#pirceperpack').val();
            var pirceperbuttle= $('#pirceperbuttle').val();

            var profitpercatton=pircepercatton-costpercatton;
            var profitperpack=pirceperpack-packcost;
            var profitperSachet=pirceperbuttle-Sachetcost;

            $('#profitpercatton').val(profitpercatton);
            $('#profitperpack').val(profitperpack);
            $('#profitperSachet').val(profitperSachet);
            
        });

        $('#pirceperpack').keyup(function(){             
            var costpercatton=$('#costpercatton').val();
            var packcost= $('#packcost').val();
            var Sachetcost= $('#Sachetcost').val();

            var pircepercatton=$('#pircepercatton').val();
            var pirceperpack= $('#pirceperpack').val();
            var pirceperbuttle= $('#pirceperbuttle').val();

            var profitpercatton=pircepercatton-costpercatton;
            var profitperpack=pirceperpack-packcost;
            var profitperSachet=pirceperbuttle-Sachetcost;

            $('#profitpercatton').val(profitpercatton);
            $('#profitperpack').val(profitperpack);
            $('#profitperSachet').val(profitperSachet);
            
        });

        $('#pirceperbuttle').keyup(function(){             
            var costpercatton=$('#costpercatton').val();
            var packcost= $('#packcost').val();
            var Sachetcost= $('#Sachetcost').val();

            var pircepercatton=$('#pircepercatton').val();
            var pirceperpack= $('#pirceperpack').val();
            var pirceperbuttle= $('#pirceperbuttle').val();

            var profitpercatton=pircepercatton-costpercatton;
            var profitperpack=pirceperpack-packcost;
            var profitperSachet=pirceperbuttle-Sachetcost;

            $('#profitpercatton').val(profitpercatton);
            $('#profitperpack').val(profitperpack);
            $('#profitperSachet').val(profitperSachet);
            
        });

        $('#quaincatssss').on('blur',function(){
                   
            var quaincat=$('#quaincat').val();   
            var costpercatton=$('#costpercatton').val();  
            var nopack=$('#nopack').val();  
            var noSachet=$('#noSachet').val();  
            
            var packcost=$('#packcost').val();  
            var Sachetcost=$('#Sachetcost').val();  
               
            if((quaincat!=="")||(costpercatton!=="")||(nopack!=="")||(noSachet!=="")){  
            
                      var cppack=costpercatton/nopack;
                var cpsachetk=cppack/noSachet;
                alert(cpsachetk);
                $('#packcost').val(cppack);
                $('#Sachetcost').val(cpsachetk);   
            }else{         
                   
             //alert(99);
             //return false;
         
            }
         
             });
             $('#vals').click(function(){
                 var costpercatton=$('#costpercatton').val();
                 var nopack=$('#nopack').val();
                 var noSachet=$('#noSachet').val();
                 var cppack=costpercatton/nopack;
                 var cpsachetk=cppack/noSachet;
                 alert(cpsachetk);
                 $('#packcost').val(cppack);
                 $('#Sachetcost').val(cpsachetk);
             })

     $("form").submit(function(event){
     event.preventDefault(); 
     var formData = new FormData($(this)[0]);
     //alert(665);
       $.ajax({
       url: $(this).attr('action'),
       type: 'POST',
       data: formData,
       beforeSend: loadStart,
	   complete: loadStop,
       async: false,
       cache: false,
       contentType: false,
       processData: false,
       success: function (data) {
       if($.trim(data)=="Successfully"){
       $('.errors').show();
           $('.errors').html('Saved Successfully');
      // window.location.href="buysalerent.php"
         
           $('.errors').fadeOut(10000);
     } else if($.trim(data)=="RecordExist"){
        $('.errors').show();
        $('.errors').html('Record Not Save, Duplicate');
         $('.errors').fadeOut(10000);
     }else if($.trim(data)=="tostore"){
     
         window.location.href="addstore.php"
     }else if($.trim(data)=="UpdateOk"){
     
        window.location.href="cart.php"
    }
    else if($.trim(data)=="AdminLoginsuccess"){
     
        window.location.href="admin/"
    }else if($.trim(data)=="UserLoginsuccess"){
     
        window.location.href="store/"
    }else if($.trim(data)=="Invaliduserpass"){
        $('.errors').show();
        $('.errors').html('Invalid Username Or Password');
         $('.errors').fadeOut(10000);
    }else if($.trim(data)=="UserExist"){
        $('.errors').show();
        $('.errors').html('Username Already Exist');
         $('.errors').fadeOut(10000);
    }else if($.trim(data)=="useraddedsuccess"){
        $('.errors').show();
        $('.errors').html('User Account Created Successfully');
         $('.errors').fadeOut(10000);
    }else if($.trim(data)=="passwordMissMatch"){
        $('.errors').show();
        $('.errors').html('Password Miss Match ');
         $('.errors').fadeOut(10000);
    }else if($.trim(data)=="UserChange"){
        $('.errors').show();
        $('.errors').html('User Passoword Reset Successfully');
         $('.errors').fadeOut(10000);
    }else if($.trim(data)=="Oldpassword"){
        $('.errors').show();
        $('.errors').html('Invalid ID Old Password');
         $('.errors').fadeOut(10000);
    }else {
            
           alert(data);  
           
       }      
   
       }
   
     });
     return false;
   
   });

   $('.digitclass').keyup(function(e)
                                {
  if (/\D/g.test(this.value))
  {
    // Filter non-digits from input value.
    this.value = this.value.replace(/\D/g, '');
  }
});
    
    }); 
   
   
    function loadStart() {

        $('.loader').show();
      
      }
      
      function loadStop() {
      
        $('.loader').hide();
      
      }
      