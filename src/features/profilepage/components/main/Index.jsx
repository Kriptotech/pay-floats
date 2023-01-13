import React from "react";
import { Plus } from "phosphor-react";
import style from "./styles.module.css";

export function Main() {
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
        <div className={style.main}>
            <div className={style.profile_banner}>
                <img src="/profile.png" alt="" />
            </div>

            <div className={style.profile_content}>
                <strong>Diego fernandes</strong>
                <br />

                <p>Telefone: 293494488585484</p>
                <p>Pais: Mocambique</p>
            </div>

            <div className={style.x_box}>
                <div className={style.profile_add_carteira}>
                    <button>
                        <span>Adicionar carteira</span>
                        <Plus weight="fill" />
                    </button>
                </div>

                <div className={style.box_column_container}>
                    <div className={style.box_column}>
                        <p>Carteiras:</p>
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
