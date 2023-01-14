import { useState } from "react";
import style from "./styles.module.css";
import { PaymentModal } from "../PaymentModal/Index";

export function Main() {
    // states
    const [message, setMessage] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedFrom, setSelectedFrom] = useState(true);
    const [selectedTo, setSelectedTo] = useState(true);

    const [selectedFromImage, setSelectedFromImage] = useState({
        name: "Ecobank",
        path: "/images/carteiras/ecobank.jpg",
    });
    const [selectedToImage, setSelectedToImage] = useState({
        name: "Ecobank",
        path: "/images/carteiras/ecobank.jpg",
    });

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
        <div className={style.request_money}>
            <div className={style.request_money_header}>
                <img src="/images/person-paying.webp" alt="" />
                <h1>Requisitar dinheiro de uma carteira para outra</h1>
            </div>

            <div className={style.request_money_row_container}>
                <form onSubmit={(e) => submitForm(e)}>
                    <h4>Requisite dinheito</h4>
                    <p>
                        Preencha os campos abaixo para requisitar dinheiro de
                        uma carteira para outra, caso tenha cometido um erro,
                        contacte o administrador para corrigi-lo.
                    </p>

                    <div>
                        <br />
                        <p>
                            <img src={selectedFromImage.path} alt="" />
                            De: {selectedFromImage.name}
                        </p>
                        <select
                            required
                            onChange={(e) => {
                                setSelectedFrom(true);
                                setSelectedFromImage(
                                    JSON.parse(e.target.value)
                                );
                            }}
                        >
                            {list.map((v) => {
                                return (
                                    <option
                                        value={JSON.stringify(v)}
                                        key={v.name}
                                    >
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

                        <p>
                            <img src={selectedToImage.path} alt="" /> Para:{" "}
                            {selectedToImage.name}
                        </p>
                        <select
                            required
                            onChange={(e) => {
                                setSelectedTo(true);
                                setSelectedToImage(JSON.parse(e.target.value));
                            }}
                        >
                            {list.map((v) => {
                                return (
                                    <option
                                        value={JSON.stringify(v)}
                                        key={v.name}
                                    >
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

                        <input required placeholder="Motante" type="number" />
                    </div>
                    <br />
                    <p style={{ color: "violet" }}>{message}</p>
                    <button>REQUISITAR</button>
                </form>
            </div>
            {isModalVisible && (
                <PaymentModal close={() => setIsModalVisible(false)} />
            )}
        </div>
    );
}
