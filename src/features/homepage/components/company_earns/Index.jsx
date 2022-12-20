import style from './styles.module.css'

export function CompanyEarns() {
  return (
    <div className={style.company_earns}>

      <div className={style.company_earns_header}>
        <h1>Ganhos da Binance</h1>
        <p>Simples e Seguro. Procura moedas populares e começa a ganhar.</p>
      </div>

      <div className={style.company_earns_box}>
        <div className={style.company_earns_content}>
            <h1>APR</h1>
            <p>Volume de trading</p>
        </div>
        <div className={style.company_earns_content}>
            <h1>APR</h1>
            <p>Volume de trading</p>
        </div>
        <div className={style.company_earns_content}>
            <h1>APR</h1>
            <p>Volume de trading</p>
        </div>
        <div className={style.company_earns_content}>
            <h1>APR</h1>
            <p>Volume de trading</p>
        </div>
        <div className={style.company_earns_content}>
            <h1>APR</h1>
            <p>Volume de trading</p>
        </div>
        <div className={style.company_earns_content}>
            <h1>APR</h1>
            <p>Volume de trading</p>
        </div>
        <div className={style.company_earns_content}>
            <h1>APR</h1>
            <p>Volume de trading</p>
        </div>
        <div className={style.company_earns_content}>
            <h1>APR</h1>
            <p>Volume de trading</p>
        </div>
      </div>

      <div className={style.company_earns_footer}>
        <a href="/signup">Começa a ganhar</a>
      </div>
    </div>
  )
}
