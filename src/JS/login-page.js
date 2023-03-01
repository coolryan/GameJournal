const loginForm = document.getElementsByTagID("login-form");
const loginButton = document.getElementsByTagID("login-form-submit");
const loginErrorMsg = document.getElementsByTagID("login-error-msg");

loginButton.addEventListener("click", (e) => {
	e.preventDefault();
	const username = loginForm.username.value;
	const password = loginForm.password.value;

	if (username === "user" && password === "web_dev") {
		alert("You have successfully logged in.");
		location.reload();
	} else {
		loginErrorMsg.style.opacity = 1;
	}
})