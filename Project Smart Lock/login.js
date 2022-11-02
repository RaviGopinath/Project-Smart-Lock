function login(){
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("Password1").value;

    if(email == ""){
        if (email == "") {
            Swal.fire({
              position: "top",
              icon: "warning",
              title: "Please Enter Your Email",
              showConfirmButton: false,
              timer: 1500,
            });
      
            return false;
          }
    }

    if (password == "") {
        Swal.fire({
          position: "top",
          icon: "warning",
          title: "Please Enter Your Password",
          showConfirmButton: false,
          timer: 1500,
        });
  
        return false;
      }

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Success',
        showConfirmButton: false,
        timer: 1500
      })

      $("#login-form").each(function(){
          this.reset();
      })

}