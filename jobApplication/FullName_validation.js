function validateFullName() {
    const input = document.getElementById("fullName");
    const value = input.value.trim();
    if (value.length < 6 || /\d/.test(value)) {
        alert("Full Name must be at least 6 characters and contain no digits.");
        input.focus();
        return false;
    }
    return true;
}
