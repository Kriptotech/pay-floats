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
        <div className={style.deposit_money}>
            <div className={style.deposit_money_header}>
                <h1>Adicionar saldo</h1>
            </div>

            <div className={style.deposit_money_row_container}>
                <form onSubmit={(e) => submitForm(e)}>
                    <h4>Adicione saldo na sua conta da plataforma</h4>
                    <p>
                        Preencha os campos abaixo para adicionar saldo, caso
                        tenha cometido um erro, contacte o administrador para
                        corrigi-lo.
                    </p>

                    <div>
                        <input
                            required
                            placeholder="Quantidade"
                            type="number"
                        />
                        <input
                            required
                            placeholder="Telefone (+258)"
                            type="number"
                        />

                        <select required>
                            <option value={1}>Mpesa</option>
                        </select>
                    </div>
                    <br />
                    <p style={{ color: "violet" }}>{message}</p>
                    <button>PROSSEGUIR</button>
                </form>
            </div>
        </div>
    );
}
