import styles from "./auth.module.css";
import { Input } from "@/components";

export const PasswordRecovery = ({ email, setEmail }) => {

    return (
        <div className={styles.form}>
            <Input
                label="Email"
                value={email}
                setValue={setEmail}
                type={"email"} />
            <p className={styles.infoText}>Please type your email and we'll send you a password reset link shortly</p>
        </div>
    )
}