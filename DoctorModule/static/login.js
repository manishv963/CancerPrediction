$(document).ready(function(){

    
    
 



        $("#username").focusout(function(){
    debugger
 var userName =  $("#username").val() 
 var userNameFormat = /^[A-Za-z0-9]{5,10}$/;
 
 $("#usernameError").text("") 
 if (!(userNameFormat.test(userName))){
    $("#usernameError").text("Invalid Username") 
    
     return false
}
else{
    return false
}
});

  $("#submitLoginForm").click(function(){

 
    
 var userName =  $("#username").val()
 var userNameFormat = /^[A-Za-z0-9]{5,10}$/;

 if (!(userNameFormat.test(userName))){
     alert("Username should be between 5 to 10 characters No special Characters Allowed")
     return false
}
      var password = $("#password").val()
      var pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{5,19}$/);

      if(pattern.test(password) == false){
            alert("Invalid Password")
            $("#password").val("")
            $("#confirmPassword").val("")
            return false
        }
      // $("#signupForm").submit()   
      //if the success is passed from above function then show successModal else show error modal
    $("#successModal").modal();
    
    
  });
});
