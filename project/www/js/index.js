$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            

var key = 0;

function submitText() {
	var text = $('#textinput').val();
	storeValue(text);
}

function storeValue(p_value) {
	//add some code to store the key-value pair in persistant storage 
	key += 1;
	window.localStorage.setItem(key, p_value);
	alert(window.localStorage.getItem(key));
}