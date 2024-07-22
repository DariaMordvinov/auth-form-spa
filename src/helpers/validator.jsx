export const EmailValidator = (email) => {
    if (email.length === 0) return false;
    if (email.length > 320) return false;
    else return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
}

export const PasswordValidator = (password) => {
    if (password.length === 0) return false;
    else return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password);
}