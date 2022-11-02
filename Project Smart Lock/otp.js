function numberfun(input){
    var number =/[^0-9]/;
    input.value = input.value.replace(number,"");
}
function save(){
var otp =$("#otp").val();
if(otp ==""){
    $("#otpvalue").html('pleace enter your 4-digit number');
   $("#otp").css("border"," 2px solid red");
}

else if(otp.length >= 4){
    $("#otpvalue").html('');
    $("#otp").css("border"," 2px solid green");
}
else if(otp != 4){
    $("#otpvalue").html('pleace enter your 4-digit number');
    $("#otp").css("border"," 2px solid red");
}
else{
    $("#otpvalue").html('');
    $("#otp").css("border"," 2px solid yellow");
}

console.log(otp);




}