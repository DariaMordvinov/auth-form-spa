import styles from "./main.module.css";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const MainPage = () => {
    const { setIsLogged } = useContext(AppContext);

    const handleClick = () => {
        setIsLogged(false);
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Welcome to this mock page.</h1>
            <p onClick={handleClick} className={styles.link}>Log Out</p>
        </div>
    )
}

export default MainPage;