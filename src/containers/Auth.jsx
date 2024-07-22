import styles from "./auth.module.css";
import { Input } from "../components/input/Input";
import { Button } from "../components/button/Button";
import { useState } from "react";

const Auth = ({ }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1 className={styles.title}>Welcome aboard!</h1>
                <p className={styles.secondaryTitle}>Sign in to continue</p>
            </div>
            <div className={styles.formWrapper}>
                <div className={styles.form}>
                    <Input
                        value={email}
                        setValue={setEmail}
                        type={"email"} />
                    <Input
                        value={password}
                        setValue={setPassword}
                        type={"password"} />
                </div>
                <p className={styles.recoveryLink}>Forgot password</p>
            </div>
            <div className={styles.footer}>
                <Button />
                <div className={styles.footerText}>
                    <p className={styles.secondaryText}>Don't have an account?</p>
                    <span className={styles.signLink}>Sign up</span>
                </div>
            </div>
        </div>
    )
}

export default Auth;