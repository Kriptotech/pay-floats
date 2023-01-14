import style from "./styles.module.css";

import ImageOne from "./assets/binance-earn.png";
import ImageTwo from "./assets/binance-pay.png";
import ImageThree from "./assets/nft.png";

export function ExplorePossibilities() {
    return (
        <div className={style.explore_possibilities}>
            <div className={style.explore_possibilities_header}>
                <h1>Como?</h1>
            </div>

            <div className={style.explore_possibilities_box}>
                <div className={style.explore_possibilities_item}>
                    <img src={ImageThree} alt="" />

                    <br />
                    <br />
                    <br />

                    <div>
                        <h2>Comprar moedas</h2>
                        <p>
                            Em minutos, efectue o pagamento inserindo os seus
                            dados de pagamentos.
                        </p>
                    </div>
                </div>

                <div className={style.explore_possibilities_item}>
                    <div>
                        <h2>Acompanhe tudo na palma da sua mão.</h2>
                        <p>
                            Na Plataforma “PayFloat” você acessa e gerencia as
                            suas carteira moveis ou bancarias em tempo real,
                            além das projeções e cálculos para cada objetivo que
                            você tiver.
                        </p>
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
                        <h2>Experiencia do usuario</h2>
                        <p>
                            Desfrute de uma experiencia de usuario criada para
                            tornar tudo simples e facil, resolvendo os seus
                            problemas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
