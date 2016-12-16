
var attempt = 5; // Variable to count number of attempts.

// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //TODO: put fb login
    if ( username == "admin" && password == "admin"){
        window.location = "../html/profile.html"; // Redirecting to other page.
        alert('successful login');
        return false;
    }
    else{
        attempt --;// Decrementing by one.

        // Disabling fields after<k> attempts.
        if( attempt == 0){

            if (window.confirm('You should check your credentials at Facebook. Do you wish to visit Facebook?'))
            {
                 window.open('https://www.facebook.com/', '_blank');
            };
            return false;
        }
        else
            alert("Wrong username or password. Please try again!");
    }
}

