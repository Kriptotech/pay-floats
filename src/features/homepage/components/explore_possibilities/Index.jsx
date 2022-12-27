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
                        <h2>Comprar Pacote</h2>
                        <p>
                            Invista em minutos, garanta uma vida toda e um
                            futuro melhor.
                        </p>
                    </div>
                </div>

                <div className={style.explore_possibilities_item}>
                    <div>
                        <h2>Acompanhe tudo na palma da sua mão.</h2>
                        <p>
                            Na Plataforma “ifloatter” você acessa{" "}
                            <a
                                href="http://www.ifloatter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.ifloatter.com
                            </a>{" "}
                            e veja a rentabilidade da sua carteira em tempo
                            real, além das projeções e cálculos para cada
                            objetivo que você tiver.
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
                        <h2>300% de Valor Retornado</h2>
                        <p>
                            Conte com expertise de gestão e alocação de
                            portfólio, e acompanhe sua rentabilidade pela
                            plataforma para um retorno 100% garantido.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
