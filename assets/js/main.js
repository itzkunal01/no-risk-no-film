// DEFINE-SCRIPT-YEAR ================================ */
const d = new Date();
document.getElementById("year-change").innerHTML = d.getFullYear();

function handleSubmit(event) {
    event.preventDefault();

    let submitbtn = document.getElementById("send_message");
    let name = document.getElementById("name_input").value;
    let email = document.getElementById("email_input").value;
    let budget = document.getElementById("budget_select").value;
    let message = document.getElementById("message").value;

    // Email validation using regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            title: "Invalid Email",
            text: "Please enter a valid email address.",
            icon: "error",
            confirmButtonText: "Okay",
        });
        return; // Stop execution if email is invalid
    }

    submitbtn.innerHTML = "Loading...";
    submitbtn.classList.add("disabled-btn");
    emailjs.init("o8t4S_bl5vzJGzshs");
    emailjs.send("service_fd67b69", "template_ujh179d", {
            name: name,
            email: email,
            budget: budget,
            message: message,
        })
        .then(() => {
            submitbtn.innerHTML = "Submit";
            submitbtn.classList.remove("disabled-btn");
            Swal.fire({
                title: "Thank you!",
                text: "We will get in touch shortly",
                icon: "success",
                confirmButtonText: "Submit",
            });

            console.log("Success");
            document.getElementById("name_input").value = "";
            document.getElementById("email_input").value = "";
            document.getElementById("budget_select").value = "";
            document.getElementById("message").value = "";
        })
        .catch((err) => {
            submitbtn.classList.remove("disabled-btn");
            Swal.fire({
                title: "Error!",
                text: "Failed to submit form! Please try again.",
                icon: "error",
                confirmButtonText: "Okay",
            });
        });
}