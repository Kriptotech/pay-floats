import React from "react";
import style from "./styles.module.css";

export function Main() {
    return (
        <div className={style.main}>
            <div className={style.profile_banner}>
                <img src="/profile.png" alt="" />
            </div>

            <div className={style.profile_content}>
                <strong>Diego fernandes</strong>
                <br />

                <p>Telefone: 293494488585484</p>
                <p>Pais: Mocambique</p>
                <p>Cidade: Nampula</p>
            </div>
        </div>
    );
}
