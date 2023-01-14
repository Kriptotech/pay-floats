import { useState } from "react";
import style from "./styles.module.css";
import { PaymentModal } from "../PaymentModal/Index";

export function Main() {
    // states
    const [message, setMessage] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedFrom, setSelectedFrom] = useState(true);
    const [selectedFromImage, setSelectedFromImage] = useState({
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
        <div className={style.transfer_money}>
            <div className={style.transfer_money_header}>
                <img src="/images/person-paying.webp" alt="" />
                <h1>Transferir dinheiro</h1>
            </div>

            <div className={style.transfer_money_row_container}>
                <form onSubmit={(e) => submitForm(e)}>
                    <h4>
                        transfira dinheiro para uma conta de banco ou carteira
                        movel
                    </h4>
                    <p>
                        Preencha os campos abaixo para transferir dinheiro, caso
                        tenha cometido um erro, contacte o administrador para
                        corrigi-lo.
                    </p>

                    <div>
                        <p>
                            <img src={selectedFromImage.path} alt="" />{" "}
                            Transferir para:
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
                        <input
                            required
                            placeholder="Telefone (+258) ou ID"
                            type="text"
                        />
                        <input required placeholder="Quantidade" type="text" />
                    </div>
                    <br />
                    <p style={{ color: "violet" }}>{message}</p>
                    <button>TRANSFERIR</button>
                </form>
            </div>

            {isModalVisible && (
                <PaymentModal close={() => setIsModalVisible(false)} />
            )}
        </div>
    );
}
