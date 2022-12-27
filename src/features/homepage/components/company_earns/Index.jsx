import style from "./styles.module.css";

export function CompanyEarns() {
    return (
        <div className={style.company_earns}>
            <div className={style.company_earns_header}>
                <h1>Metodos de Pagamentos</h1>
                <p>
                    Levantamentos e Depósitos inteligentes num só click via
                    M-pesa, desde várias carteiras moveis e bancarias existentes
                    no nosso pais, integramos com o melhor do que podes ter ao
                    teu alcance e melhorar o seu status Financeiro..
                </p>
            </div>

            <div className={style.company_earns_box}>
                <div className={style.company_earns_content}>
                    <h1>Levantamento via:</h1>
                    <p>M-Pesa</p>
                </div>
                <div className={style.company_earns_content}>
                    <h1>Levantamento via:</h1>
                    <p>E-mola</p>
                </div>
                <div className={style.company_earns_content}>
                    <h1>Levantamento via:</h1>
                    <p>Ponto24</p>
                </div>
                <div className={style.company_earns_content}>
                    <h1>Levantamento via:</h1>
                    <p>BIM</p>
                </div>
                <div className={style.company_earns_content}>
                    <h1>Levantamento via:</h1>
                    <p>BCI</p>
                </div>
                <div className={style.company_earns_content}>
                    <h1>Levantamento via:</h1>
                    <p>MozaBAnco, Access Bank, UBA</p>
                </div>
                <div className={style.company_earns_content}>
                    <h1>Levantamento via:</h1>
                    <p>Standard Bank, NeDBank</p>
                </div>
                <div className={style.company_earns_content}>
                    <h1>Levantamento via:</h1>
                    <p>PayPal, BitCoin, Wise</p>
                </div>
            </div>

            <div className={style.company_earns_footer}>
                <a href="/signup">Começa a ganhar</a>
            </div>
        </div>
    );
}
