import { useNavigate } from "react-router-dom";
import { CurrencyDollar, Fire } from "phosphor-react";

import style from "./styles.module.css";

export function Table() {
    const navigate = useNavigate();

    return (
        <div className={style.table}>
            <div className={style.table_container}>
                <div className={style.left}>
                    <small>Nome</small>

                    {[1, 1, 1, 1, 11].map((v, i) => {
                        return (
                            <div>
                                BNB <Fire color="tomato" weight="fill" />
                            </div>
                        );
                    })}
                </div>

                <div className={style.right}>
                    <div className={style.small_box}>
                        <small>Preço</small>
                        <small>Detalhes venda</small>
                    </div>

                    {[1, 1, 1, 1, 11].map((v, i) => {
                        return (
                            <div className={style.right_box}>
                                <div>
                                    <span>244.1</span>
                                    <span>
                                        <CurrencyDollar size={13} />
                                        244.10
                                    </span>
                                </div>
                                <button onClick={() => navigate("/buy_coin")}>
                                    ver mais
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
