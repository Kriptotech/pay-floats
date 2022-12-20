import style from './styles.module.css'

import ImageOne from './assets/binance-earn.png'
import ImageTwo from './assets/binance-pay.png'
import ImageThree from './assets/nft.png'

export function ExplorePossibilities() {
  return (
    <div className={style.explore_possibilities}>
      <div className={style.explore_possibilities_header}>
        <h1>Explora possibilidades infinitas com a Binance</h1>
      </div>

      <div className={style.explore_possibilities_box}>
        <div className={style.explore_possibilities_item}>
          <img src={ImageThree} alt="" />

          <br />
          <br />
          <br />

          <div>
            <h2>Binance Earn</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque quos.</p>
          </div>
        </div>

        <div className={style.explore_possibilities_item}>
          <div>
            <h2>Faz o teu negocio crescer como o Binance Pay</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque quos eos impedit. Ducimus dolor blanditiis repellendus debitis accusamus assumenda.</p>
          </div>
          
          <br />
          <br />
          <br />

          <img src={ImageTwo} alt="" />
        </div>

        <div className={style.explore_possibilities_item}>
          <img src={ImageOne} alt="" />

          <br />
          <br />
          <br />

          <div>
            <h2>Binance Earn</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque quos.</p>
          </div>
        </div>
      </div>

    </div>
  )
}
