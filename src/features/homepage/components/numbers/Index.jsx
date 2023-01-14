import style from "./styles.module.css";

export function Numbers() {
    return (
        <div className={style.numbers}>
            <div className={style.numbers_box}>
                <div className={style.numbers_content}>
                    <h1>Poupe tempo, faça transferencias na PayFloat.</h1>
                    <p>
                        Nossa experiência na estruturação de transações
                        financeiras complicadas, ao mesmo tempo em que acomoda
                        diversos interesses de parceria, permiti-nos oferecer
                        transferencias de confiaça para ti.
                    </p>
                </div>

                <div className={style.numbers_content}>
                    <h1>
                        Faça transferencias rapidas em qualquer lugar a qualquer
                        momento com a ajuda da PayFloat.
                    </h1>
                    <p>
                        Nosso objetivo é ajudar-te e oferecer soluções para
                        todas as necessidades de serviços. Transfira com
                        facilidade para varias carteiras moveis ou Bancos.
                    </p>
                </div>

                <div className={style.numbers_content}>
                    <h1>As suas carteiras</h1>
                    <p>
                        Oferecemos um sistema que grarante que faças
                        transferencias para Mpesa, Emola, Paypal, Ponto24,
                        EcoBank, AccesBank e muito mais.
                    </p>
                </div>
            </div>
        </div>
    );
}
