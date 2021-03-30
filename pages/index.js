import { useEffect } from 'react'
import gsap from 'gsap'

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  useEffect(() => {

    document.querySelector('.logo-animation').style.animation = 'moveY 1s steps(40) forwards'

    const tl = gsap.timeline()

    tl.from('.brand-animation>.line span', 1, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 4,
      stagger: {
        amount: 0.5
      }
    }).from('.intro__nav .nav__link', 1, {
      opacity: 0,
      stagger: 0.4
    })

  }, [])

  return (
    <>
      <Head>
        <title>Braganza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="intro">
          <div className="logo-animation"/>

          <div className="brand-animation">
            <div className="line name">
              <span>Braganza</span>
            </div>
            <div className="line slogan">
              <span>идем в ногу со временем</span>
            </div>
          </div>

          <ul className="nav intro__nav">
              <li className="nav__item">
                <Link href="/advertising-department">
                  <a className="nav__link">Рекламно-выставочные услуги</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/it-department">
                  <a className="nav__link" href="#">Ит услуги</a>
                </Link>
              </li>
          </ul>
        </section>
      </main>
    </>
  )
}
