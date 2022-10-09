const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const createBtn = document.getElementById("createBtn");
// const errorDiv = document.getElementById("error-div");

//

const setError = (e, message) => {
	if (e.classList.contains("error")) {
		return;
	}
	if (e.classList.contains("success")) {
	}
	const errorDisplay = document.createElement("div");
	errorDisplay.classList.add("error-message");
	const input = e.parentElement;
	input.appendChild(errorDisplay);
	errorDisplay.innerText = message;
	e.classList.add("error");
};
const setSuccess = (e) => {
	e.classList.remove("error");
	e.classList.add("success");
};

createBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (password.value != confirmPassword.value) {
		setError(confirmPassword, "Password do not match");
	}
	if (fname.value == "") {
		setError(fname, "Please enter a first name");
	}
	if (lname.value == "") {
		setError(lname, "Please enter a last name");
	}
	if (email.value == "") {
		setError(email, "Please enter a valid email address");
	}
	if (phone.value == "") {
		setError(phone, "Please enter a phone number");
	}
	if (password.value == "") {
		setError(password, "Please enter a password");
	}
	if (confirmPassword.value == "") {
		setError(confirmPassword, "Please confirm your password");
	}
});
