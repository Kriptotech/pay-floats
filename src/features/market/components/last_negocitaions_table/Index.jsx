import { useNavigate } from "react-router-dom";
import { CurrencyDollar, Fire } from "phosphor-react";

import style from "./styles.module.css";

export function LastNegociationTable() {
    const navigate = useNavigate();

    const list = [
        {
            name: "Rand",
            path: "/images/carteiras/rand.png",
        },
        {
            name: "Rand",
            path: "/images/carteiras/rand.png",
        },
    ];

    return (
        <div className={style.table}>
            <div className={style.table_container}>
                <div className={style.left}>
                    <small>Nome</small>
                    {list.map((v) => {
                        return (
                            <div>
                                <img src={v.path} alt="" />
                                {v.name}
                            </div>
                        );
                    })}
                </div>

                <div className={style.right}>
                    <div className={style.small_box}>
                        <small>Preço</small>
                        <small>Detalhes venda</small>
                    </div>

                    {list.map((v) => {
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
