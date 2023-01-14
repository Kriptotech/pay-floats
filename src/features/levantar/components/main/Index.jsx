import { useState } from "react";
import style from "./styles.module.css";
import { PaymentModal } from "../PaymentModal/Index";

export function Main() {
    // states
    const [message, setMessage] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedFrom, setSelectedFrom] = useState(true);
    const [selectedFromImage, setSelectedFromImage] = useState({
        name: "Mpesa",
        path: "/images/carteiras/mpesa.png",
    });

    async function submitForm(e) {
        e.preventDefault();
        setIsModalVisible(true);
        setMessage("");
    }

    const list = [
        {
            name: "Mpesa",
            path: "/images/carteiras/mpesa.png",
        },
    ];

    return (
        <div className={style.deposit_money}>
            <div className={style.deposit_money_header}>
                <img src="/images/person-paying.webp" alt="" />
                <h1>Levantar dinheiro</h1>
            </div>

            <div className={style.deposit_money_row_container}>
                <form onSubmit={(e) => submitForm(e)}>
                    <h4>levante dinheiro para Mpesa</h4>
                    <p>
                        Preencha os campos abaixo para levantar dinheiro, caso
                        tenha cometido um erro, contacte o administrador para
                        corrigi-lo.
                    </p>

                    <div>
                        <p>
                            <img src={selectedFromImage.path} alt="" /> Levantar
                            no:
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
                            placeholder="Telefone (+258) "
                            type="text"
                        />
                        <input required placeholder="Quantidade" type="text" />
                    </div>
                    <br />
                    <p style={{ color: "violet" }}>{message}</p>
                    <button>LEVANTAR</button>
                </form>
            </div>

            {isModalVisible && (
                <PaymentModal close={() => setIsModalVisible(false)} />
            )}
        </div>
    );
}
