import { 
    UserCircle,
    UserCirclePlus,
    List,
} from "phosphor-react";

import style from "./styles.module.css";

export function Header() {

    return (
        <header className={style.main_header}>
            <nav>
                <div className={style.logo_container}>
                    <a href="/">BINANCE</a>
                </div>

                <div className={style.auth_links}>
                    <a href="/signin"><UserCircle />Entrar</a>
                    <a href="/signup"><UserCirclePlus />Registar</a>
                </div>
            </nav>
        </header>
    );
}
