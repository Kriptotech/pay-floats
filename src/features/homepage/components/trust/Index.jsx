import style from "./styles.module.css";

import Image from "./assets/trusted-section.png";

export function Trust() {
    return (
        <div className={style.trust}>
            <div className={style.trust_box}>
                <div className={style.trust_left}>
                    <h1>Vantagens da plataforma</h1>

                    <ul>
                        <li>
                            <h2>Gratis e acessivel</h2>
                            <p>
                                Desfrute de todos os serviços da plataforma
                                PayFloat de graça, tudo ao seu dispor para ti.
                            </p>
                        </li>

                        <li>
                            <h2>Torene-se um vendedor</h2>
                            <p>
                                Torne-se um vendedor dentro da plataforma e
                                venda moedas personalizando o valor que tu
                                queres vender.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className={style.trust_right}>
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    );
}
