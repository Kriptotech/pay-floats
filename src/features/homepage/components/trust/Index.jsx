import style from './styles.module.css'

import Image from './assets/trusted-section.png'

export function Trust() {
  return (
    <div className={style.trust}>

      <div className={style.trust_box}>

        <div className={style.trust_left}>
            <h1>A tua exchange de criptomoedas de confiança</h1>

            <ul>
              <li>
                <h2>Fundo de ativos seguros</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit provident fugit? Hic molestias, fugit doloremque et dolor nisi, placeat beatae ullam esse nulla laboriosam nam odio ipsa aut nesciunt..</p>
              </li>
              
              <li>
                <h2>Controlo de acesso personalizado</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit provident fugit? Hic molestias, fugit doloremque et dolor nisi, placeat beatae ullam esse nulla laboriosam nam odio ipsa aut nesciunt..</p>
              </li>
            </ul>
        </div>

        <div className={style.trust_right}>
            <img src={Image} alt="" />
        </div>
      </div>

    </div>
  )
}
