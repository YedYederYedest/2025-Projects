function generatepw(passwordlength, includeLowercase, includeNumbers, includeUppercase, includeSymbols) {
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolschars = "@!£$%^&*()#?+-=";

    let allowedchars = "";
    let password = "";

    allowedchars += includeLowercase ? lowercasechars : "";
    allowedchars += includeUppercase ? uppercasechars : "";
    allowedchars += includeNumbers ? numberchars : "";
    allowedchars += includeSymbols ? symbolschars : "";

    if (passwordlength <= 0) {
        return "Password length must be at least 1";
    }

    if (allowedchars.length === 0) {
        return "At least 1 set of characters need to be selected";
    }

    for (let i = 0; i < passwordlength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }

    return password;
}

const passwordlength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatepw(passwordlength, includeLowercase, includeNumbers, includeUppercase, includeSymbols);

console.log(`Generated Password: ${password}`);



