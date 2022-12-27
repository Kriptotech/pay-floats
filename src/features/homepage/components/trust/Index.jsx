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
                            <h2>Pacotes & Valor</h2>
                            <p>
                                Pacote mínimo de 20mt (vinte meticais), comece a
                                investir com investimentos mínimos no valor
                                certo que confere ao teu bolso. Uma plataforma
                                de fácil acesso e simples de usar.
                            </p>
                        </li>

                        <li>
                            <h2>Investir & Bónus</h2>
                            <p>
                                Na Floatter os Investidores não precisam
                                trabalhar para obter os ganhos passivos os
                                bónus, desde que tenha o pacote activo e começa
                                a ganha os seus lucros diários.
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
