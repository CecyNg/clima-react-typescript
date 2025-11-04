import styles from './Alert.module.css';


function Alert({children} : {children: React.ReactNode}) {
  return (
    <div className={styles.alert}>{children}</div>
  )
}


export default Alert;