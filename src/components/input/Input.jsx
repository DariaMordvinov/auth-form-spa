import styles from "./input.module.css";
import { useState } from "react";

export const Input = ({ type, value, setValue }) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={styles.input}>
            <label className={`${styles.label} ${value?.length > 0 ? styles.filled : ""}`} htmlFor={type}>
                {type?.charAt(0).toUpperCase() + type?.slice(1)}
            </label>
            <input
                id={type}
                value={value}
                onChange={(e) => handleChange(e)}
                className={styles.inputField}
                name={type}
                type={type} />
        </div >
    )
}