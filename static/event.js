window.addEventListener("load",start,false);
function start()
{
    document.getElementById("bname").addEventListener("mouseover",com,false);
    document.getElementById("bname").addEventListener("mouseout",expan,false);
    document.getElementById("register").addEventListener("click",success,false);
}
function com()
{
    document.getElementById("bname").innerHTML='<h1 class="special">CD</h1>';
}

function expan()
{
    document.getElementById("bname").innerHTML="Course Dékhò";
}

function success()
{
    var user_name = document.getElementById("form3Example1c").value;
    document.getElementById("loginbox").innerHTML='<div class="card-body p-md-5" style="border-radius: 25px; background-color:aliceblue;"><h1 style="color:green; text-align: center;">Successfully Registered '+user_name+' <i class="bi bi-check"></i></h1><br><h1 style="text-align:center;"><img src="img/registerquote.jfif"> </h1><br><button type="button" class="btn btn-success btn-lg" id="register" style="float:right; border-radius: 2cm;"><a href="index.html" style="text-decoration:none; color:white;">Continue</button></a></div>';
}