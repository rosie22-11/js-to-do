var user = []; 
var store = []; 
			
function loading(){
	var data = "";
	var s = ''; 
	user.map((person, index)=>{
		data = data + "<div class='element'>";
		data = data + "<i class='fa fa-save sicon' onclick='four("+index+")'></i>" ;
		data = data + person ;
		data = data + "<i class='fa fa-trash dicon' onclick='three("+index+")'></i>" + "<br/>" ;
		data = data + "</div>";
	})
			
	store.map((stores, index)=>{
		s = s + "<br/>";
		s = s +"<i class='fa fa-check-square'></i>   "+ stores + "<br/>"; 
	})
	
	document.getElementById("saveitem").innerHTML = s; 
	document.getElementById("demo").innerHTML = data;
	}

function add(){
	var newuser = document.getElementById("inpt").value.trim();

	if(newuser == ""){
		alert("Enter Value");
	}else{
		user.push(newuser);
		loading();
		document.getElementById("inpt").value = "";	
	}}

function three(deleteuser){
	user.splice(deleteuser,1);
	loading();
}		
	
function four(saveUser){ //1
	var a = user[saveUser];
	three(saveUser);
	document.getElementById("saveitem").innerHTML =  a;
  store.push(a);
	loading();		
}

function refresh(){
  store.length = 0;
  loading();
}

