const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const createBtn = document.getElementById("createBtn");
const errorDiv = document.getElementById("error-div");

function formError() {
	if (password != confirmPassword) {
		const error = document.createTextNode("Passwords do not match");
		password.appendChild(error);
		confirmPassword.appendChild(error);
	}
}

createBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (password.value != confirmPassword.value) {
		errorDiv.innerText = "Passwords do not match";
		password.style.backgroundColor = "red";
		confirmPassword.style.backgroundColor = "red";
	}
});
