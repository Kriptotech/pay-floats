import React from "react";
import style from "./styles.module.css";
import { Eye, Fire, Info } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function Main() {
    const navigate = useNavigate();

    const list = [
        {
            name: "Ecobank",
            path: "/images/carteiras/ecobank.jpg",
        },
        {
            name: "Accesbank",
            path: "/images/carteiras/acces-bank.png",
        },
        {
            name: "Emola",
            path: "/images/carteiras/emola.png",
        },
        {
            name: "Letshego",
            path: "/images/carteiras/letshego.png",
        },
        {
            name: "Mpesa",
            path: "/images/carteiras/mpesa.png",
        },
        {
            name: "Needbank",
            path: "/images/carteiras/needbank.png",
        },
        {
            name: "Paypal",
            path: "/images/carteiras/paypal.png",
        },
        {
            name: "Ponto24",
            path: "/images/carteiras/ponto24.png",
        },
        {
            name: "Rand",
            path: "/images/carteiras/rand.png",
        },
    ];

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
                        {list.map((v) => {
                            return (
                                <div className={style.box_column_item}>
                                    <div className={style.box_column_item_left}>
                                        <img src={v.path} alt="" />
                                        <div>
                                            <span>{v.name}</span>
                                            <small>{v.name}</small>
                                        </div>
                                    </div>
                                    <div
                                        className={style.box_column_item_right}
                                    >
                                        <div>
                                            <span>0.98484384338</span>
                                            <small>0.98484384338</small>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
