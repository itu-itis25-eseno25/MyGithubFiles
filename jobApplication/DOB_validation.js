function calculateAge(birthDate) {
    const diff = Date.now() - birthDate.getTime();
    return new Date(diff).getUTCFullYear() - 1970;
}
function validateDOB() {
    const input = document.getElementById("dob");
    const age = calculateAge(new Date(input.value));
    if (age <= 17 || age >= 36) {
        alert("Age must be between 18 and 35.");
        input.focus();
        return false;
    }
    return true;
}
