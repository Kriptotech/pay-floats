import { useNavigate } from "react-router-dom";
import { CurrencyDollar, Fire } from "phosphor-react";

import style from "./styles.module.css";

export function InNegociationTable() {
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
                                    <span>01/01/2023</span>
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
