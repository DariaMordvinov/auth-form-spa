import { useContext, useRef, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import { Toast } from "@/components/Toast";
import styles from "./list.module.css";

const ToastList = ({ }) => {
    const listRef = useRef(null);
    const { toasts, removeToast } = useContext(AppContext);

    const handleScrolling = (el) => {
        el?.scrollTo(0, 0);
    };

    useEffect(() => {
        handleScrolling(listRef.current);
    }, [toasts]);

    return (
        <>{toasts.length > 0 && <div
            className={styles.list}
            aria-live="assertive"
            ref={listRef}>
            {toasts.reverse().map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>
        }</>
    )
}

export default ToastList;