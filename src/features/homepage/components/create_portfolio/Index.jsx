import style from "./styles.module.css";

import Image from "./assets/phone.png";

export function CreatePortfolio() {
    return (
        <div className={style.create_portfolio}>
            <div className={style.create_portfolio_box}>
                <div className={style.create_portfolio_left}>
                    <h1>O que Oferecemos</h1>
                    <p>
                        Alto grau de sofisticação de seus investimentos, acesso
                        a fundos exclusivos e resiliência necessária frente a
                        volatilidade do mercado. Algoritmo que monitora até
                        13.000 combinações possíveis, para montar a carteira
                        personalizada para você.
                    </p>

                    <ul>
                        <li>
                            <h2>Liberdade Financeira</h2>
                            <p>
                                Uma carteira diversificada tem chances maiores e
                                mais probabilidade de alcançar objetivos.
                            </p>
                        </li>

                        <li>
                            <h2>Consultoria de Negocios</h2>
                            <p>
                                Alto grau de sofisticação de seus investimentos,
                                acesso a fundos exclusivos e resiliência
                                necessária frente a volatilidade do mercado.
                            </p>
                        </li>

                        <li>
                            <h2>Negocio Flexivel e Seguro</h2>
                            <p>
                                A Floatter cuida dos seus investimentos e seus
                                negócios, multiplicando os seus ganhos ate 3X do
                                valor investido.
                            </p>
                        </li>

                        <li>
                            <h2>Administração de Investimentos</h2>
                            <p>
                                Monitoramos o mercado, fazemos o rebalanceamento
                                periódico da sua carteira e você acompanha tudo
                                pela plataforma, enquanto faz o que ninguém pode
                                fazer por você: aproveitar a vida.
                            </p>
                        </li>
                        <li>
                            <h2>
                                Tecnologia de Ponta e Especialistas de Mercado
                            </h2>
                            <p>
                                Nosso algoritmo faz cálculos humanamente
                                impossíveis para otimizar sua carteira. As
                                análises de mercado, feitas pelos nossos
                                especialistas, completam este dueto virtuoso. O
                                app é intuitivo e prático, você acompanha tudo
                                em tempo real.
                            </p>
                        </li>
                        <li>
                            <h2>Melhor Modelo de Negócio</h2>
                            <p>
                                Taxa única e transparente para fazer a gestão da
                                sua carteira e buscar ótimos retornos. Sem
                                conflito de interesses, devolução de 300% do
                                valor investido e com o melhor custo benefício
                                em 540 dias, no total de 18 Meses.
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
