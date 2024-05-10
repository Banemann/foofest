import Header from './components/Header';
import styles from './styles.module.css'; 

export const metadata = {
  title: "Home",
  description: "Home page",
}

export default function Home() {
  return (
    <main className={styles.mainHeight}>
      <Header/>

      

      <div className={styles.contentContainer}>
        <div className={styles.infoContainer}>
        <h1 className={styles.title}>Accessibility Checker</h1>
        <p className={styles.description}>
          Enter a URL to check the websites accessibility
        </p>
      </div>

        <form action="/report" className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label className={styles.formLabel} htmlFor="url"/>
            <input className={styles.inputField} type="text" id="url" name="url" placeholder="Enter URL" required></input>
          </div>
          <button className={styles.submitButton} type="submit">
            Check it
          </button>
        </form>
      </div>
    </main>
  );
}
