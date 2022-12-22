import { useState } from "react";
import { useLocation } from "react-router-dom";

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";

export function Main() {
    // states
    const itemData = useLocation()?.state;

    return (
        <div className={style.buy_coin}>
            <div className={style.buy_coin_list_container}>
                <div className={style.buy_coin_list_box}>
                    <div>
                        <button>Comprar moeda</button>
                    </div>
                    <div>
                        <p>
                            Moeda: <span>Dolar</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Quantidade: <span>1200</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Vendendo em: <span>Meticais</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Valor de troca:
                            <span>30000</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
