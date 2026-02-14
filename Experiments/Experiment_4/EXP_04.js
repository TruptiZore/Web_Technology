function submitForm()
{
    //get input values using DOM
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    //clear old message 
    document.getElementById("nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("passwordError").innerHTML="";
    document.getElementById("successMsg").innerHTML="";

    let isValid = true;

    // Name validation
    if (name === "")
    {
        document.getElementById("nameError").innerHTML="Name field is requird";
        isValid = false;
    }

     // Email validation
    if (email === "") 
    {
        document.getElementById("emailError").innerHTML = "Email field is required";
        isValid = false;
    } 
    else if (!email.includes("@")) 
    {
        document.getElementById("emailError").innerHTML = "Invalid email format";
        isValid = false;
    }

    // Password validation
    if (password === "") 
    {
        document.getElementById("passwordError").innerHTML = "Password field is required";
        isValid = false;
    } 
    else if (password.length < 8) 
    {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters";
        isValid = false;
    }

    if(isValid)
    {
        // alert("Form submitted successfully!");
        document.getElementById("successMsg").innerHTML = "Form submitted successfully!";
        document.getElementById("successMsg").style.color = "green";
        return false;
    }

    return isValid;
}