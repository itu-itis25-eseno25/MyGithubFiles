function validateSalary() {
    const input = document.getElementById("salary");
    if (input.value < 0) {
        alert("Salary cannot be negative.");
        input.focus();
        return false;
    }
    return true;
}
