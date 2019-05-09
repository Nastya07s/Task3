let form_in = document.getElementById("form-in"),
	form_up = document.getElementById("form-up"),
	l_txt = document.getElementById("link-txt");
//l_txt.onclick = (e) => hide(e);
l_txt.addEventListener("click", hide);
function hide(event) {
	form_in.style.display = (event.target.textContent == "Sign up") ? "none" : "";
	form_up.style.display = (event.target.textContent == "Sign up") ? "block" : "";
    event.target.textContent = (event.target.textContent == "Sign up") ? "Sign in" : "Sign up";
}