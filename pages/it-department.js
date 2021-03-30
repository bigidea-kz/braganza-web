import Link from 'next/link'
import Head from 'next/head'

const ItDepartment = () => {
  return (
    <>
      <Head>
        <title>Braganza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="hero hero__it">
          <p>Ведутся технические работы...</p>
          <Link href="/">
            <a className="nav__link">Главная</a>
          </Link>
        </section>
      </main>
    </>
  )
}

export default ItDepartment