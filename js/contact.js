console.log("contact.js loaded");

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const contactMethod = document.getElementById("contact-method").value;

    // Name check (letters only)
    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Name must contain letters only.");
        return false;
    }

    // Email check
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email.");
        return false;
    }

    // Subject minimum length
    if (subject.length < 3) {
        alert("Subject must be at least 3 characters.");
        return false;
    }

    // Message minimum length
    if (message.length < 10) {
        alert("Message must be at least 10 characters.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

