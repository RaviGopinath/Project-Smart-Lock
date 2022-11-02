  function signin() {

    // event.preventDefault()

    var fname = document.getElementById("Input").value;
    var lname = document.getElementById("Input2").value;
    var email = document.getElementById("Input3").value;
    var phone = document.getElementById("Input4").value;
    var password1 = document.getElementById("Password1").value;
    var password2 = document.getElementById("Password2").value;
    

    if (fname == "") {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Please Enter Your Firstname",
        showConfirmButton: false,
        timer: 1500,
      });

      return false;
    }

    if (lname == "") {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Please Enter the Last Name",
        showConfirmButton: false,
        timer: 1500,
      });

      return false;
    }

    if (email == "") {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Please Enter the Email",
        showConfirmButton: false,
        timer: 1500,
      });

      return false;
    }

    if (phone == "") {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Please Enter the Phone Number",
        showConfirmButton: false,
        timer: 1500,
      });

      return false;
    }

    if (password1 == "") {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Please Enter the Password",
        showConfirmButton: false,
        timer: 1500,
      });

      return false;
    }

    if (password2 == "") {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Please Confirm the Password ",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    }

if(password1 == password2){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          $("#register-form").each(function(){
              this.reset();
          })
    }
    else{
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Passwrod Miss Matched',
            showConfirmButton: false,
            timer: 1500
          })
          return false
    }


}

        
