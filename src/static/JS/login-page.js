const loginForm = document.getElementsByTagID("login-form");
const loginButton = document.getElementsByTagID("login-form-submit");
const loginErrorMsg = document.getElementsByTagID("login-error-msg");

loginButton.addEventListener("click", (e) => {
	e.preventDefault();
	const username = loginForm.username.value;
	const password = loginForm.password.value;

	if (username === "Juan" && password === "lmnop") {
		alert("You have successfully logged in.");
		location.reload("/index.html");
	} else {
		loginErrorMsg.style.opacity = 1;
		alert("Please. Try Again!")
		location.reload("/error.html");
	}
})