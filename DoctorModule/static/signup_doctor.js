

$(document).ready(function(){

    
    
 


$("#name").focusout(function(){
    
 var userName =  $("#name").val() 
 var nameFormat = /^[A-Za-z\s]{3,50}$/;
 
 $("#nameError").text("") 
 if (!(nameFormat.test(userName))){
    $("#nameError").text("Invalid Name") 
    
     return false
}
else{
    $("#nameError").text("") 
}
});


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


$("#email").focusout(function(){
    
 var email =  $("#email").val() 
 
 
 $("#emailError").text("") 
 if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){

   $("#emailError").text("Invalid Email") 
    
     return false
}
else{
    return false
}
});  
$("#password").keyup(function(){
    
 var password =  $("#password").val() 
 var pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{5,19}$/);

 $("#passwordError").text("") 
 if (!(pattern.test(password))){
    $("#passwordError").text("Password does not match the criteria") 
    
     return false
}
else{
    return false
}
});
  $("#submitForm").click(function(){

 debugger
    var name =  $("#username").val()
 var nameFormat =    /[a-zA-Z\s]{3,50}/;
 

 if (!(nameFormat.test(name))){
     alert("Invalid Name")
     return false
}
    var pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{5,19}$/);
        
      var emailAddress =  $("#email").val()

      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)))
  {
    alert("Email id is invalid")
          return false
  }
 
 var userName =  $("#username").val()
 var userNameFormat = /^[A-Za-z0-9]{5,10}$/;

 if (!(userNameFormat.test(userName))){
     alert("Username should be between 5 to 10 characters No special Characters Allowed")
     return false
}
var password = $("#password").val()
      var confirmPassword = $("#confirmPassword").val()
      if(pattern.test(password) == false){
            alert("Invalid Password")
            $("#password").val("")
            $("#confirmPassword").val("")
            return false
        }
      if(password != confirmPassword){
          alert("Password and Confirm password should be same")
          return false
      }
     // $("#signupForm").submit()   
      //if the success is passed from above function then show successModal else show error modal
    $("#successModal").modal();
    
    
  });
});
