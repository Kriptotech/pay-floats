import style from "./styles.module.css";

export function Numbers() {
    return (
        <div className={style.numbers}>
            <div className={style.numbers_box}>
                <div className={style.numbers_content}>
                    <h1>Investir bem, é investir para um futuro melhor</h1>
                    <p>
                        Nossa experiência na estruturação de transações
                        financeiras complicadas, ao mesmo tempo em que acomoda
                        diversos interesses de parceria, permitiu que ela
                        alcançasse mmuitas aquisições e financiamentos
                    </p>
                </div>

                <div className={style.numbers_content}>
                    <h1>
                        Investindo na Floatter tens “o melhor negocio para uma
                        vida melhor”
                    </h1>
                    <p>
                        No entanto, nosso objetivo é aconselhar e oferecer
                        soluções para todas as necessidades de serviços
                        financeiros de nossos clientes.
                    </p>
                </div>

                <div className={style.numbers_content}>
                    <h1>Gerenciamentos Optimizados</h1>
                    <p>
                        Oferecemos um gerenciamento abrangente de portfólio,
                        montamos uma carteira ideal para si, junto a outras
                        contas de investimento e gerenciamos um portfólio
                        projectado para atender às suas necessidades.
                    </p>
                </div>
            </div>
        </div>
    );
}
