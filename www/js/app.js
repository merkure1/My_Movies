
(function () {

    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var signUpTpl = Handlebars.compile($("#sign-up").html());
    var signInTpl = Handlebars.compile($("#sign-in").html());  
    var fPassTpl = Handlebars.compile($("#forgot-p").html());

  
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
        $('#login_submit').on('click',function(){

            var user=$("#username").val();
            var pass=$("#password").val();
            if(user!="" && pass!="")
            {
             $("#loading_spinner").css({"display":"block"});
             $.ajax
             ({
             type:'post',
             url:'auth.php',
             data:{
              do_login:"do_login",
              user:user,
              pass:pass
             },
             success:function(response) {
             if(response=="success")
             {
            alert("It works!");

             }
             else
             {
               alert("Wrong Details");
             }
             }
             });
            }
           
            else
            {
             alert("Please Fill All The Details");
            }

        });

    }

    function renderSignUpView(){
        $('body').html(signUpTpl());
    }

    

    function renderForgotPassView(){
        $('body').html(fPassTpl());
    }
   



}());