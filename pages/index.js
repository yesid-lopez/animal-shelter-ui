import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Animal Shelter</title>
        <link rel="icon" href="/app-icon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        Powered by The Dream Team!
      </footer>
    </div>
  )
}
