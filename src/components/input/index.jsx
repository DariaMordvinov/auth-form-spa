import styles from "./input.module.css";
import { useRef } from "react";

export const Input = ({ label, type, value, setValue }) => {
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleLabelClick = () => {
        if (document.activeElement !== inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={styles.input}>
            <label
                onClick={handleLabelClick}
                className={`${styles.label} ${value?.length > 0 ? styles.filled : ""}`}
                htmlFor={type}>
                {label}
            </label>
            <input
                ref={inputRef}
                id={label}
                value={value}
                onChange={(e) => handleChange(e)}
                className={styles.inputField}
                name={type}
                type={type} />
        </div >
    )
}