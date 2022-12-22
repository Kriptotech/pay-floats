import { useState } from "react";
import style from "./styles.module.css";

export function Main() {
    const [message, setMessage] = useState("");

    function submitForm(e) {}

    return (
        <div className={style.request_money}>
            <div className={style.request_money_header}>
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
                        <p>De:</p>
                        <select required>
                            <option value={1}>Mpesa</option>
                            <option value={1}>Ponto24</option>
                            <option value={1}>Emola</option>
                        </select>

                        <p>Para:</p>
                        <select required>
                            <option value={1}>Ponto24</option>
                            <option value={1}>Emola</option>
                            <option value={1}>Mpesa</option>
                        </select>

                        <input
                            required
                            placeholder="Seu numero ou ID"
                            type="number"
                        />
                        <input required placeholder="Motante" type="number" />
                    </div>
                    <br />
                    <p style={{ color: "violet" }}>{message}</p>
                    <button>REQUISITAR</button>
                </form>
            </div>
        </div>
    );
}
