// import { useState } from "react";
import { XCircle } from "phosphor-react";
import Style from "./Style.module.css";

export const PaymentModal = ({ close }) => {
    // submit values
    const closeModal = async () => {
        close();
    };

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
        <div className={Style.Menu_Modal}>
            <div className={Style.Menu_Modal_box} data-aos="fade-down">
                <button onClick={closeModal} className={Style.Menu_Modal_close}>
                    <XCircle
                        size={35}
                        weight="fill"
                        color="rgb(50, 170, 225)"
                    />
                </button>

                <div className={Style.Menu_Modal_content}>
                    <strong>Importante:</strong>

                    <p>Qual carteira deseja adicionar?</p>

                    <div className={Style.form}>
                        {list.map((v) => {
                            return (
                                <button>
                                    {v.name}
                                    <img
                                        src={v.path}
                                        alt=""
                                        style={{ width: 20, height: 20 }}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
