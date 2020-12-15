
function hideAll() {
    alert("Page is loaded");
  }

function check_form()
{
 var dogs=document.getElementById("dogs").value;

 if(dogs=="Golden")
 {
  alert("Golden Retriever Found!");
  document.getElementById("dogs").value="";

  golden.style.display = "block"
  lab.style.display = "none"
  german.style.display = "none"
  beagle.style.display = "none"
  bulldog.style.display = "none"
  terrier.style.display = "none"
 }
 else if(dogs=="Labrador")
 {
  alert("Labrador Found!");
  document.getElementById("dogs").value="";
  
  golden.style.display = "none"
  lab.style.display = "block"
  german.style.display = "none"
  beagle.style.display = "none"
  bulldog.style.display = "none"
  terrier.style.display = "none"
 }
 else if(dogs=="GermanShepherd")
 {
  alert("German Shepherd Found!");
  document.getElementById("dogs").value="";
  
  golden.style.display = "none"
  lab.style.display = "none"
  german.style.display = "block"
  beagle.style.display = "none"
  bulldog.style.display = "none"
  terrier.style.display = "none"
 }
 else if(dogs=="beagle")
 {
  alert("beagle Found!");
  document.getElementById("dogs").value="";
  
  golden.style.display = "none"
  lab.style.display = "none"
  german.style.display = "none"
  beagle.style.display = "block"
  bulldog.style.display = "none"
  terrier.style.display = "none"
 }
 else if(dogs=="bulldog")
 {
  alert("bulldog Found!");
  document.getElementById("dogs").value="";
  
  golden.style.display = "none"
  lab.style.display = "none"
  german.style.display = "none"
  beagle.style.display = "none"
  bulldog.style.display = "block"
  terrier.style.display = "none"
 }
 else if(dogs=="terrier")
 {
  alert("Terrier Found!");
  document.getElementById("dogs").value="";
  
  golden.style.display = "none"
  lab.style.display = "none"
  german.style.display = "none"
  beagle.style.display = "none"
  bulldog.style.display = "none"
  terrier.style.display = "block"
 }
 else
 {
    alert("Dog not found!");
 }

 return false;
}