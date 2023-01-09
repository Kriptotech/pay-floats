import React from "react";
import style from "./styles.module.css";
import { Eye, Fire, Info } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function Main() {
    const navigate = useNavigate();
    return (
        <div className={style.main_container}>
            <div className={style.main}>
                <div className={style.box}>
                    <small>
                        Saldo Total <Eye weight="duotone" />
                    </small>
                    <strong>122233.2332</strong>
                    <small>
                        122233.2332 <Info weight="duotone" />
                    </small>

                    <div className={style.box_row}>
                        <button onClick={() => navigate("/market")}>
                            Comprar
                        </button>
                        <button onClick={() => navigate("/deposit_money")}>
                            Depósito
                        </button>
                    </div>

                    {/* <p>Carteiras:</p> */}

                    <div className={style.box_column}>
                        <div className={style.box_column_item}>
                            <div className={style.box_column_item_left}>
                                <Fire
                                    weight="duotone"
                                    size={40}
                                    color="tomato"
                                />
                                <div>
                                    <span>M-pesa</span>
                                    <small>M-pesa</small>
                                </div>
                            </div>
                            <div className={style.box_column_item_right}>
                                <div>
                                    <span>0.98484384338</span>
                                    <small>0.98484384338</small>
                                </div>
                            </div>
                        </div>
                        <div className={style.box_column_item}>
                            <div className={style.box_column_item_left}>
                                <Fire
                                    weight="duotone"
                                    size={40}
                                    color="tomato"
                                />
                                <div>
                                    <span>E-mola</span>
                                    <small>E-mola</small>
                                </div>
                            </div>
                            <div className={style.box_column_item_right}>
                                <div>
                                    <span>0.98484384338</span>
                                    <small>0.98484384338</small>
                                </div>
                            </div>
                        </div>
                        <div className={style.box_column_item}>
                            <div className={style.box_column_item_left}>
                                <Fire
                                    weight="duotone"
                                    size={40}
                                    color="tomato"
                                />
                                <div>
                                    <span>Letshego</span>
                                    <small>Letshego</small>
                                </div>
                            </div>
                            <div className={style.box_column_item_right}>
                                <div>
                                    <span>0.98484384338</span>
                                    <small>0.98484384338</small>
                                </div>
                            </div>
                        </div>
                        <div className={style.box_column_item}>
                            <div className={style.box_column_item_left}>
                                <Fire
                                    weight="duotone"
                                    size={40}
                                    color="tomato"
                                />
                                <div>
                                    <span>BTC</span>
                                    <small>BTC</small>
                                </div>
                            </div>
                            <div className={style.box_column_item_right}>
                                <div>
                                    <span>0.98484384338</span>
                                    <small>0.98484384338</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
