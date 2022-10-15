const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
// Error messages
const errorFname = document.getElementById("fnameError");
const errorLname = document.getElementById("lnameError");
const errorEmail = document.getElementById("emailError");
const errorPhone = document.getElementById("phoneError");
const errorPassword = document.getElementById("passwordError");
const errorConfirmPassword = document.getElementById("confirmPasswordError");
const createBtn = document.getElementById("createBtn");

const clearErrors = () => {
	const errorList = document.querySelectorAll(".error-message");
	const inputs = document.querySelectorAll(".error");
	errorList.forEach(function clearErrors(e) {
		e.innerText = "";
	});
	inputs.forEach(function clearErrorStyle(e) {
		e.classList.remove("error");
	});
};

const loginSuccess = () => {
	const inputs = document.querySelectorAll(".error");
	if (inputs.length == 0) {
		alert("Login Successful");
	}
};

createBtn.addEventListener("click", (e) => {
	e.preventDefault();
	clearErrors();
	if (fname.value == "") {
		errorFname.innerText = "-Please enter your first name.";
		fname.classList.add("error");
	}
	if (lname.value == "") {
		errorLname.innerText = "-Please enter your last name.";
		lname.classList.add("error");
	}
	if (email.value == "" || !email.value.includes("@")) {
		errorEmail.innerText = "-Please enter a valid email address.";
		email.classList.add("error");
	}
	let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	if (phone.value == "" || !phone.value.match(phoneRegex)) {
		errorPhone.innerText = "-Please enter a valid phone number.";
		phone.classList.add("error");
	}
	if (password.value == "") {
		errorPassword.innerText = "-Please enter your password.";
		password.classList.add("error");
	}
	if (confirmPassword.value == "") {
		errorConfirmPassword.innerText = "-Please confirm your password";
		confirmPassword.classList.add("error");
	}
	if (password.value != confirmPassword.value) {
		errorPassword.innerText = "-Passwords do not match.";
		password.classList.add("error");
		confirmPassword.classList.add("error");
	}

	loginSuccess();
});
