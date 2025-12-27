function validateExperience() {
    const input = document.getElementById("experience");
    if (input.value < 0) {
        alert("Experience cannot be negative.");
        input.focus();
        return false;
    }
    return true;
}
