function validateTCKN() {
    const input = document.getElementById("tckn");
    const tckn = input.value.trim();

    if (!/^\d{11}$/.test(tckn)) {
        alert("TCKN 11 haneli ve sadece rakamlardan oluşmalıdır.");
        input.focus();
        return false;
    }

    if (tckn[0] === "0") {
        alert("TCKN 0 ile başlayamaz.");
        input.focus();
        return false;
    }

    const digits = tckn.split("").map(Number);

    let oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
    let evenSum = digits[1] + digits[3] + digits[5] + digits[7];
    let digit10 = ((oddSum * 7) - evenSum) % 10;

    if (digit10 !== digits[9]) {
        alert("Geçersiz TCKN (10. hane hatalı).");
        input.focus();
        return false;
    }

    let digit11 = (digits.slice(0, 10).reduce((a, b) => a + b, 0)) % 10;

    if (digit11 !== digits[10]) {
        alert("Geçersiz TCKN (11. hane hatalı).");
        input.focus();
        return false;
    }

    return true;
}
