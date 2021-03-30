import Head from 'next/head'

const AdvertisingDepartment = () => {
  return (
    <>
      <Head>
        <title>Braganza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="header__brand">Braganza</div>
        
        <div className="header__nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <main>
        <section className="hero hero__advertising">
            <h1 className="headline">Весь спектр рекламно-выставочных услуг</h1>
            <p className="description">
              от разработки дизайна и строительства под “ключ” до декорирования торговых точек 
            </p>

            <ul className="nav hero-advertising__nav">
              <li className="nav__item">
                <a href="#" className="nav__link">Дизайн</a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">Выставочные стенды</a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">Наружная реклама</a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">Оформление торговых точек</a>
              </li>
            </ul>
        </section>
      </main>
    </>
  )
}

export default AdvertisingDepartment