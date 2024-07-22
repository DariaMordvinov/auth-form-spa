import styles from "./auth.module.css";
import { Button } from "@/components";
import { useState } from "react";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { EmailValidator, PasswordValidator } from "@/helpers/validator";
import { handleReset, handleSignIn, handleSignUp } from "@/helpers/api";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

const Auth = ({ }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isForgot, setIsForgot] = useState(false);
    const { showToast, setIsLogged } = useContext(AppContext);

    const finishLoad = (bool, message) => {
        setTimeout(() => {
            if (bool) {
                setIsLogged(true);
            } else {
                showToast({
                    message,
                    type: "error"
                })
            }
            setIsLoading(false)
        }, 2500)
    }

    const finishReset = (bool) => {
        setTimeout(() => {
            if (bool) {
                showToast({
                    message: "Please check your email for further instructions.",
                    type: "success"
                })
            } else {
                showToast({
                    message: "Something went wrong. Please try again later",
                    type: "error"
                })
            }
            setIsForgot(false)
            setIsLoading(false)
        }, 2500)
    }

    const handleSubmit = () => {
        if (!EmailValidator(email)) {
            showToast({
                message: "Please provide a valid email",
                type: "warning"
            });
            return;
        }

        if (isForgot) {
            handleReset({ email }, setIsLoading, finishReset);
            return;
        }

        if (password.length === 0) {
            showToast({
                message: "Please type your password",
                type: "warning"
            });
            return;
        }

        if (!isLogin && passwordRepeat !== password) {
            showToast({
                message: "Passwords don't match",
                type: "warning"
            });
            return;
        }

        if (!isLogin && !PasswordValidator(password)) {
            showToast({
                message: "Password should be +8 characters: uppercase, lowercase letteres, digits",
                type: "warning"
            });
            return;
        }

        isLogin
            ? handleSignIn({ email, password }, setIsLoading, finishLoad)
            : handleSignUp({ email, password }, setIsLoading, finishLoad);
    }

    const toggleMode = () => {
        setIsLogin(prev => !prev)
    }

    const backToDefault = () => {
        setIsForgot(false);
        setIsLogin(true);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1 className={styles.title}>Welcome aboard!</h1>
                <p className={styles.secondaryTitle}>Sign in to continue</p>
            </div>
            {isLogin
                ? <Login
                    isForgot={isForgot}
                    setIsForgot={setIsForgot}
                    isLoading={isLoading}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword} />
                : <SignUp
                    isLoading={isLoading}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    setPasswordRepeat={setPasswordRepeat}
                    passwordRepeat={passwordRepeat} />}
            <div className={styles.footer}>
                <Button
                    isForgot={isForgot}
                    isLogin={isLogin}
                    isDisabled={isLoading}
                    onSubmit={handleSubmit} />
                <div className={styles.footerText}>
                    {isForgot
                        ? <p>Back to <span onClick={backToDefault} className={styles.signLink}>Sign in</span> </p>
                        : isLoading
                            ? <p>Please don't close this tab</p>
                            : isLogin
                                ? <><p>Don't have an account?</p>
                                    <span onClick={toggleMode} className={styles.signLink}>Sign up</span></>
                                : <><p>Already have an acconut?</p>
                                    <span onClick={toggleMode} className={styles.signLink}>Sign in</span></>}
                </div>
            </div>
        </div>
    )
}

export default Auth;