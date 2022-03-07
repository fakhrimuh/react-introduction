import styles from "./error.module.css";

const Error = ()=>{
    return(
        <div className={styles.container}>
            <p className={styles.error}>Error, please reload the page</p>
        </div>
    )
}

export default Error;