import { useState } from "react";
import style from "./styles.module.css";

export function Main() {
    // states
    const [message, setMessage] = useState("");

    async function submitForm(e) {
        e.preventDefault();
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
                        <select required>
                            <option value={1}>Dolar</option>
                        </select>

                        <input
                            required
                            placeholder="Quantidade da moeda a ser vendida"
                            type="number"
                        />

                        <select required>
                            <option value={1}>Metical</option>
                        </select>

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
        </div>
    );
}
