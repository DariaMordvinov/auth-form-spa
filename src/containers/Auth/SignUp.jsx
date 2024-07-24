import styles from "./auth.module.css";
import { Input, Loader } from "@/components";

export const SignUp = ({ isLoading,
    email,
    setEmail,
    password,
    setPassword,
    passwordRepeat,
    setPasswordRepeat }) => {

    return (
        <div className={`${styles.formWrapper} ${styles.signUp}`}>
            {isLoading
                ? <Loader />
                : <form className={styles.form}>
                    <Input
                        label={"Email"}
                        value={email}
                        setValue={setEmail}
                        type={"email"} />
                    <div>
                        <Input
                            label={"Password"}
                            isEmail={false}
                            value={password}
                            setValue={setPassword}
                            type={"password"} />
                        <p className={styles.info}>8+ characters: uppercase, lowercase, numbers</p>
                    </div>
                    <Input
                        isEmail={false}
                        value={passwordRepeat}
                        setValue={setPasswordRepeat}
                        label={"Confirm password"}
                        type={"password"} />
                </form>}
        </div>
    )
}