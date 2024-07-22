import styles from "./input.module.css";

export const Input = ({ label, type, value, setValue }) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={styles.input}>
            <label className={`${styles.label} ${value?.length > 0 ? styles.filled : ""}`} htmlFor={type}>
                {label}
            </label>
            <input
                id={label}
                value={value}
                onChange={(e) => handleChange(e)}
                className={styles.inputField}
                name={type}
                type={type} />
        </div >
    )
}