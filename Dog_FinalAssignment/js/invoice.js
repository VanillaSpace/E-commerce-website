
function SaveItem() {
			
	var name = document.forms.AdoptionList.name.value;
	var data = document.forms.AdoptionList.data.value;
	localStorage.setItem(name, data);
	doShowAll();
	
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
        var list = "<tr><th>DOGS</th><th>COST</th></tr>\n";
		var total = 0;
		var i = 0;
		var tax = 0;
		var grandTotal = 0;
		
		//this was so annoying :( 
		for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);  
			tax = total * 0.15;
			var grandTotal = total + tax;
			list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";
			total += parseInt(localStorage.getItem(key));
        }
		
		if (list == "<tr><th>Dogs</th><th>Costs</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		
	   //print stuff
	   document.getElementById('list').innerHTML = list;
	   
       document.getElementById('adopt').innerHTML = "Adoption Cost: $" + (total); 
	   document.getElementById('tax').innerHTML = "Tax (15%): $" + tax;
	   document.getElementById('total').innerHTML = "Grand Total: $" + (grandTotal);


	   document.getElementById("grandTotal").value = "$" +(grandTotal);
       document.getElementById("taxes").value = "$" +(tax);
    } 
    
}

function checkout()
{
	alert('Thank you for visiting my page!');
}

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}
