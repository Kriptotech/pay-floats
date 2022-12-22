import { useNavigate } from "react-router-dom";

import style from "./styles.module.css";

export function Table() {
    const navigate = useNavigate();

    return (
        <div className={style.table}>
            <div className={style.table_container}>
                <h3>Moedas sendo vendidas:</h3>

                <div className={style.dark_item_invisible}>
                    <dl className={style.dark_item}>
                        <dt>Moeda</dt>
                    </dl>
                    <dl className={style.dark_item}>
                        <dt>Estado</dt>
                    </dl>
                    <dl className={style.dark_item}>
                        <dt>Quantidade</dt>
                    </dl>
                    <dl className={style.dark_item}>
                        <dt>Vendendo por</dt>
                    </dl>
                </div>

                {[1, 2, 3, 4, 5].map((item) => {
                    return (
                        <div>
                            <dl
                                className={style.litgh_item}
                                onClick={() => navigate("/buy_coin")}
                                style={{ cursor: "pointer" }}
                            >
                                <dd>Dolar</dd>
                            </dl>
                            <dl
                                style={{
                                    color: true ? "green" : "orange",
                                    cursor: "pointer",
                                }}
                                className={style.litgh_item}
                                onClick={() => navigate("/buy_coin")}
                            >
                                <dd>{true ? "Disponivel" : "Vendido"}</dd>
                            </dl>
                            <dl
                                className={style.litgh_item}
                                onClick={() => navigate("/buy_coin")}
                                style={{ cursor: "pointer" }}
                            >
                                <dd>1200</dd>
                            </dl>
                            <dl
                                className={style.litgh_item}
                                onClick={() => navigate("/buy_coin")}
                                style={{ cursor: "pointer" }}
                            >
                                <dd>3000MT</dd>
                            </dl>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
