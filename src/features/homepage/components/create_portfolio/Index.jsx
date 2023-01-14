import style from "./styles.module.css";

import Image from "./assets/phone.png";

export function CreatePortfolio() {
    return (
        <div className={style.create_portfolio}>
            <div className={style.create_portfolio_box}>
                <div className={style.create_portfolio_left}>
                    <h1>O que Oferecemos</h1>
                    <p>
                        A nossa plataforma oferece soluções tecnologicas para
                        tornar a tua vida mais facil. Alto grau de sofisticação
                        nas suas transferencias, faça parte de uma comunidade no
                        nosso mercado, e muito mais.
                    </p>

                    <ul>
                        <li>
                            <h2>Mercado de moedas ao seu dispor</h2>
                            <p>
                                O nosso mercado de moedas é uma das
                                funcionalidades que irás desfrutar como usuario
                                da plataforma.
                            </p>
                        </li>

                        <li>
                            <h2>Trannsferencia de dinheiro</h2>
                            <p>
                                Transfira dinheiro de forma facil para contas
                                moveis ou bancarias com a simplicidade e
                                facilidade da PayFloat
                            </p>
                        </li>

                        <li>
                            <h2>Adicione Carteiras</h2>
                            <p>
                                Adicione carteiras moveis ou bancarias e
                                gerrencie elas usando a nossa plataforma.
                            </p>
                        </li>

                        <li>
                            <h2>
                                Requisite dinheiro de uma carteira para outra
                            </h2>
                            <p>
                                Com a maior simplicidade, apenas diga de onde e
                                para onde quer que o sue dinheior vá, e nós
                                trataremos do resto.
                            </p>
                        </li>
                    </ul>

                    <a href="/signup">Começar</a>
                </div>

                <div className={style.create_portfolio_right}>
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    );
}
