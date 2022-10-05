$(document).ready(function(){
    //Register Now button
    $("#apptButton").click(function(){
      $("form").slideToggle();
    });

    //Submit button
    $("#secondButton").click(function() {
        alert("You have been successfully registered!");
    });
});

