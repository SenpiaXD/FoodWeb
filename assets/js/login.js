function loginValidation() {

    const adminUsername = "admin";
    const adminPassword = "admin123";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(!username && !password) {
        Swal.fire('Blank!', 'Please fill in all fields', 'info');
    } else if(username === adminUsername && password === adminPassword) {
        // Going to the dashboard activity
        // Swal.fire('Success!', 'Prossesing to the next page...', 'success');
        Swal.fire({
            title: 'Successs HHAHAHHAHAHAHA BORING HIRAP NETO SHITT!.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTF5cHQydmdmZ2dtYTBxOHQzZjBvNzRkcnBsY3RoZWQ0cXcyanVyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5qOOwvec55dLBNfKJp/giphy.gif)',
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://media.tenor.com/bWUeVRqW9-IAAAAi/fast-cat-cat-excited.gif")
                center top
                repeat
            `
            })
        document.getElementById("login-form").reset();
    } else {
        // Need to improve design...
        Swal.fire('Incorrect!', 'Wrong username or password', 'error');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    
    const passwordInput = document.getElementById("password");
    const togglePassword = document.querySelector(".toggle-password");

    togglePassword.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);

        this.querySelector("i").classList.toggle("fa-eye");
        this.querySelector("i").classList.toggle("fa-eye-slash");
    });
});