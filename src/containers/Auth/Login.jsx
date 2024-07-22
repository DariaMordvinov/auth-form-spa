import styles from "./auth.module.css";
import { Input, Loader } from "@/components";
import { useState } from "react";
import { PasswordRecovery } from "./PasswordRecovery";

export const Login = ({
    isLoading,
    email,
    setEmail,
    password,
    setPassword,
    isForgot,
    setIsForgot }) => {

    return (
        <div className={`${styles.formWrapper} ${styles.signIn}`}>
            {isLoading
                ? <Loader />
                : isForgot
                    ? <PasswordRecovery
                        email={email}
                        setEmail={setEmail} />
                    : <><div className={styles.form}>
                        <Input
                            label="Email"
                            value={email}
                            setValue={setEmail}
                            type={"email"} />
                        <Input
                            label="Password"
                            isEmail={false}
                            value={password}
                            setValue={setPassword}
                            type={"password"} />
                    </div>
                        <p onClick={() => setIsForgot(true)} className={styles.recoveryLink}>Forgot password</p></>}
        </div>
    )
}