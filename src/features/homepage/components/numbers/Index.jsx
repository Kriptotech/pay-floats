import style from './styles.module.css'

export function Numbers() {
  return (
    <div className={style.numbers}>

      <div className={style.numbers_box}>
        <div className={style.numbers_content}>
            <h1>76 000 milhões em USD</h1>
            <p>Volume de trading em 24 horas na exchange da Binance</p>
        </div>

        <div className={style.numbers_content}>
            <h1>350+</h1>
            <p>Criptomoedas admitidas á cotação</p>
        </div>

        <div className={style.numbers_content}>
            <h1>120 milhões</h1>
            <p>Utilizadores registrados</p>
        </div>

        <div className={style.numbers_content}>
            <h1>{'<0'},10%</h1>
            <p>Taxas de traansação mais baixas</p>
        </div>
      </div>

    </div>
  )
}
