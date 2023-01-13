import { useState } from "react";
import style from "./styles.module.css";
import { PaymentModal } from "../PaymentModal/Index";

export function Main() {
    // states
    const [message, setMessage] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedFrom, setSelectedFrom] = useState(false);
    const [selectedTo, setSelectedTo] = useState(false);

    async function submitForm(e) {
        e.preventDefault();
        setIsModalVisible(true);
        setMessage("");
    }

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
        <div className={style.deposit_money}>
            <div className={style.deposit_money_header}>
                <h1>Depositar dinheiro</h1>
            </div>

            <div className={style.deposit_money_row_container}>
                <form onSubmit={(e) => submitForm(e)}>
                    <h4>
                        deposite dinheiro para uma conta de banco ou carteira
                        movel
                    </h4>
                    <p>
                        Preencha os campos abaixo para depositar dinheiro, caso
                        tenha cometido um erro, contacte o administrador para
                        corrigi-lo.
                    </p>

                    <div>
                        <input required placeholder="Quantidade" type="text" />
                        <p>De:</p>
                        <select
                            required
                            onChange={() => {
                                setSelectedFrom(true);
                            }}
                        >
                            {list.map((v) => {
                                return (
                                    <option value={v.name} key={v.name}>
                                        {v.name}
                                    </option>
                                );
                            })}
                        </select>
                        {selectedFrom && (
                            <input
                                required
                                placeholder="Telefone (+258) ou ID"
                                type="text"
                            />
                        )}

                        <p>Para:</p>
                        <select required onChange={() => setSelectedTo(true)}>
                            {list.map((v) => {
                                return (
                                    <option value={v.name} key={v.name}>
                                        {v.name}
                                    </option>
                                );
                            })}
                        </select>
                        {selectedTo && (
                            <input
                                required
                                placeholder="Telefone (+258) ou ID"
                                type="text"
                            />
                        )}
                    </div>
                    <br />
                    <p style={{ color: "violet" }}>{message}</p>
                    <button>DEPOSITAR</button>
                </form>
            </div>

            {isModalVisible && (
                <PaymentModal close={() => setIsModalVisible(false)} />
            )}
        </div>
    );
}
