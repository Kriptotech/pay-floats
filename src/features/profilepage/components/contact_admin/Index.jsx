import React from "react";
import style from "./styles.module.css";
import { User, WhatsappLogo } from "phosphor-react";

export function ContactAdmin() {
    return (
        <a
            href="https://api.whatsapp.com/send?1=pt_br&phone=258842201091"
            className={style.WhatsappLogo_container}
        >
            <WhatsappLogo size={40} color="white" /> {"  "} Contactar admin
        </a>
    );
}
