
(function () {

    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var signUpTpl = Handlebars.compile($("#sign-up").html());
    var signInTpl = Handlebars.compile($("#sign-in").html());  
    var fPassTpl = Handlebars.compile($("#forgot-p").html());

    var mainTpl = Handlebars.compile($("#main").html());
    var favsTpl = Handlebars.compile($("#favs").html());
    var infoTpl = Handlebars.compile($("#info").html());

    let favsArray = [];
    let movieHolder = '';
  
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

        $('#back-3').on('click',function(){
            renderHomeView();

        });

        

    }

    function renderSignUpView(){
        $('body').html(signUpTpl());
        $('#back-4').on('click',function(){
            renderHomeView();

        });
    }

    

    function renderForgotPassView(){
        $('body').html(fPassTpl());
    }

    function renderMainView(){

        var alpha = ['a','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u'];

        for(var a=0;a<alpha.length;a++){
            var url = "https://www.omdbapi.com/?t="+a+"&page=2&type=movie&apikey=ef84fc3a" 

            $.get(url,function(json){

                // var li = document.createElement('li');
                // $('#results').appendChild(li);
                // $('#results').append(json.Title +" -"+json.Year +"<br/>");
                var li = document.createElement('li');
                li.className = 'dynamic-link'; // Class name
                li.innerHTML = json.Title +" -"+json.Year; // Text inside
                $('#results').append(li); // Append it
                // li.onclick(alert(li.innerHTML));
            });
        }

         // Attach the event!

        // $('.dynamic-link').click(function(){
        //     alert(li.innerHTML);
        // });

        $('.dynamic-link').on('click',function(){
            alert(li.innerHTML);
            
        });



        $('body').html(mainTpl());

        $('#favs_b').on('click',function(){
            renderFavsView();
        });

        $('#searchBtn').on('click',function(){
            var str = $("#searchBox").val();

            renderInfoView(str);

        });


    }

    function renderFavsView(){
        $('body').html(favsTpl());
        $('#back-1').on('click',function(){
            renderMainView();
        });

        for(let i=0;i<favsArray.length;i++){
            var url = "https://www.omdbapi.com/?i="+favsArray[i]+"&apikey=ef84fc3a" 

            $.get(url,function(json){
                var li = document.createElement('li');
                li.className = 'favorites'; // Class name
                li.innerHTML = json.Title; // Text inside
                $('#fav-m').append(li);     
            });

            

        }

       
    }

    function renderInfoView(str){
        $('body').html(infoTpl());

            if(str!=''){
                var url = "https://www.omdbapi.com/?t="+str+"&apikey=ef84fc3a" 

                $.get(url,function(json){
                    movieHolder = json.imdbID;
                    $('#movie-t').html(json.Title);
                    $('#movie-y').html(json.Year);
                    $('#movie-dir').html(json.Director);
                    $('#movie-act').html(json.Actors);
                    $('#movie-r').html(json.imdbRating);

                    $('<img />')
                        .attr('src', "" + json.Poster + "")         // ADD IMAGE PROPERTIES.
                        .appendTo($('#movie-p'));       // ADD THE IMAGE TO DIV.
                });

            }

            $('#back-2').on('click',function(){
                renderMainView();
            });

            $('#add-fav').on('click',function(){
                favsArray.push(movieHolder);
                console.log(favsArray);
            });


    }
   



}());