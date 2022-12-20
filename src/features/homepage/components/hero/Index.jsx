import style from './styles.module.css'
import {User} from 'phosphor-react'

import HeroImage from './assets/hero img.png'

export function Hero() {
  return (
    <div className={style.hero}>

      <div className={style.hero_box}>
        <div className={style.hero_left}>
            <h1>Compra, vende e guarda mais de 350 criptomoedas na Binance</h1>
            <a href="/signup">
              <User weight='fill'/>
              Registar com e-mail ou telefone
            </a>
        </div>

        <div className={style.hero_right}>
            <img src={HeroImage} alt="" />
        </div>
      </div>

    </div>
  )
}
