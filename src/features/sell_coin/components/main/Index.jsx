import { useState } from "react";
import style from "./styles.module.css";
import { PaymentModal } from "../PaymentModal/Index";

export function Main() {
    // states
    const [message, setMessage] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    async function submitForm(e) {
        e.preventDefault();
        setIsModalVisible(true);
        setMessage("");
    }

    return (
        <div className={style.sell_coin}>
            <div className={style.sell_coin_header}>
                <h1>Vender moeda</h1>
            </div>

            <div className={style.sell_coin_row_container}>
                <form onSubmit={(e) => submitForm(e)}>
                    <h4>Venda moedas</h4>
                    <p>
                        Preencha os campos abaixo para vender moedas, caso tenha
                        cometido um erro, contacte o administrador para
                        corrigi-lo.
                    </p>

                    <div>
                        <p>Deseja vender:</p>
                        <select required>
                            <option value={1}>Dolar</option>
                        </select>

                        <input
                            required
                            placeholder="Quantidade da moeda a ser vendida"
                            type="number"
                        />

                        <p>Por quanto deseja vender:</p>

                        <input
                            required
                            placeholder="valor da moeda a ser vendida"
                            type="number"
                        />
                    </div>
                    <br />
                    <p style={{ color: "violet" }}>{message}</p>
                    <button>VENDER</button>
                </form>
            </div>
            {isModalVisible && (
                <PaymentModal close={() => setIsModalVisible(false)} />
            )}
        </div>
    );
}
