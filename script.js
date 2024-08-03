let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", getFormvalue);

submitBtn.style.backgroundColor = "lightblue";

function getFormvalue(e) {
    //Write your code here
	e.preventDefault();

	let fname = document.querySelector('input[name="fname"]').value;
	let lname = document.querySelector('input[name="lname"]').value;

	alert(fname + " " +lname);

}
