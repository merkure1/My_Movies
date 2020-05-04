
(function () {

    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var signUpTpl = Handlebars.compile($("#sign-up").html());
    var signInTpl = Handlebars.compile($("#sign-in").html());  
    var fPassTpl = Handlebars.compile($("#forgot-p").html());

    // var weatherTpl = Handlebars.compile($("#res-tpl").html());
    // var apiKey = "cdd70e83a64029a85bb5d6a7bb08b3d1"
    
  
    renderHomeView();

    function renderHomeView() {

        $('body').html(homeTpl());
        
        $('#signUp').on('click',function(){

            renderSignUpView();
           
            // var str = $(".search-key").val();
            // if(str != "" && str.length == 5){
            //     renderSearchView(str);
            // }
            // else{
            //     $('#alert').html("INVALID INPUT, TRY AGAIN!");
            // }

        });

        $('#signIn').on('click',function(){

            renderSignInView();

        });
        
       
    }

    // function renderSearchView(zip) {
      
      
    //     $('body').html(weatherTpl());
        
    //         var url = 'http://api.openweathermap.org/data/2.5/forecast?zip='+zip+'&units=imperial'+'&APPID='+apiKey
            
    //         $.get(url,function(json){
    //             $('#degree').html(json.list[0].main.temp)
    //             $('#city').html(json.city.name)
    //             $('#humidity').html(json.list[0].main.humidity)
    //             $('#wind').html(json.list[0].wind.speed)
    //         });

            


    //         $('.searchagain').on('click',function(){

    //             var str = $(".search-key").val();
    //             if(str != "" && str.length == 5){
    //                 renderSearchView(str);
    //             }
    //             else{
    //                 $('#alert').html("INVALID INPUT, TRY AGAIN!");
    //             }
                
    //         });
           
    //         $('#home').on('click',function(){
    //             renderHomeView();
    //         });

    // }

    function renderSignInView(){
        $('body').html(signInTpl());
        $('#fPass').on('click',function(){
            renderForgotPassView();
        });
    }

    function renderSignUpView(){
        $('body').html(signUpTpl());
    }

    

    function renderForgotPassView(){
        $('body').html(fPassTpl());
    }
   



}());