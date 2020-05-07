
(function () {

    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var signUpTpl = Handlebars.compile($("#sign-up").html());
    var signInTpl = Handlebars.compile($("#sign-in").html());  
    var fPassTpl = Handlebars.compile($("#forgot-p").html());

    var mainTpl = Handlebars.compile($("#main").html());
    var favsTpl = Handlebars.compile($("#favs").html());


  
    renderHomeView();
   


    function renderHomeView() {

        $('body').html(homeTpl());
        
        $('#signUp').on('click',function(){
            renderSignUpView();
        });

        $('#signIn').on('click',function(){
            renderSignInView();
        });
        

       
    }


    function renderSignInView(){
        $('body').html(signInTpl());
        $('#fPass').on('click',function(){
            renderForgotPassView();
        });
        $('#sign_in').on('click',function(){
            renderMainView();

        });

    }

    function renderSignUpView(){
        $('body').html(signUpTpl());
    }

    

    function renderForgotPassView(){
        $('body').html(fPassTpl());
    }

    function renderMainView(){

        var alpha = ['a','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u'];

        for(var a=0;a<alpha.length;a++){
            var url = "https://www.omdbapi.com/?t="+a+"&type=movie&apikey=ef84fc3a" 

            $.get(url,function(json){
                $('#results').append(json.Title +" -"+json.Year +"<br/>");
            });
        }


        $('body').html(mainTpl());

        $('#favs_b').on('click',function(){
            renderFavsView();
        });

        $('#searchBtn').on('click',function(){
        
            var str = $("#searchBox").val();
            if(str!=null){
                var url = "https://www.omdbapi.com/?t="+str+"&apikey=ef84fc3a" 

                $.get(url,function(json){
    
                    $('#results').html(json.Title + "<br/>");
                    // $('#city').html(json.city.name)
                    // $('#humidity').html(json.list[0].main.humidity)
                    // $('#wind').html(json.list[0].wind.speed)
    
                });

            }




        });


    }

    function renderFavsView(){
        $('body').html(favsTpl());
    }
   



}());