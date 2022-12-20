import style from './styles.module.css'

import Image from './assets/phone.png'

export function CreatePortfolio() {
  return (
    <div className={style.create_portfolio}>

      <div className={style.create_portfolio_box}>

        <div className={style.create_portfolio_left}>
            <h1>Constroi o teu proprio portfolio</h1>
            <p>Começa a tua primeira transação por estes passos simples.</p>

            <ul>
              <li>
                <h2>Adiciona fundos atua conta</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit provident fugit? Hic molestias, fugit doloremque et dolor nisi, placeat beatae ullam esse nulla laboriosam nam odio ipsa aut nesciunt..</p>
              </li>
              
              <li>
                <h2>Verifica a tua conta</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit provident fugit? Hic molestias, fugit doloremque et dolor nisi, placeat beatae ullam esse nulla laboriosam nam odio ipsa aut nesciunt..</p>
              </li>
              
              <li>
                <h2>Como fazer trading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit provident fugit? Hic molestias, fugit doloremque et dolor nisi, placeat beatae ullam esse nulla laboriosam nam odio ipsa aut nesciunt..</p>
              </li>
            </ul>
            
            <a href="/signup">Começar</a>
        </div>

        <div className={style.create_portfolio_right}>
            <img src={Image} alt="" />
        </div>
      </div>

    </div>
  )
}
