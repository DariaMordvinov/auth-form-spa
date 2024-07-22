import styles from "./toast.module.css";
import { SuccessIcon, ErrorIcon, WarningIcon } from "@/constants";

export const Toast = ({ message = "default", type, onClose }) => {
    const Icon = {
        success: SuccessIcon,
        error: ErrorIcon,
        warning: WarningIcon
    }

    const IconComponent = Icon[type];

    return (
        <div className={styles.toast} role="alert">
            <div className={styles.left}>
                <p className={styles.message}>{message}</p>
            </div>
            <div onClick={onClose} className={styles.icon}><IconComponent /></div>
        </div>
    )
}