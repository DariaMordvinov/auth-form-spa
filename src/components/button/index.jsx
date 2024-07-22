import styles from "./button.module.css";

export const Button = ({ onSubmit, isDisabled, isLogin, isForgot }) => {
    return (
        <button onClick={onSubmit}
            className={`${styles.button} 
            ${isDisabled && styles.disabled}`}>
            {isForgot
                ? "Submit"
                : isLogin ? "Sign in" : "Sign up"}
        </button>
    )
}