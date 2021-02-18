import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Animal Shelter</title>
        <link rel="icon" href="/app-icon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/animal/register">
          <a> Register animal</a>
        </Link>
        <Link href="/animal/list">
          <a> List Animal</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        Powered by The Dream Team!
      </footer>
    </div>
  )
}
