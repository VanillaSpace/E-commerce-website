function login()
{
 var name=document.getElementById("name").value;
 var pass=document.getElementById("pass").value;

 if(name=="admin" && pass=="1234")
 {
  alert("welcome back!");
  document.getElementById("name").value="";
  document.getElementById("pass").value="";
  location.replace("./index.html");
 }
 else
 {
   alert("Incorrect login");
}

return false;
}