import { 
    UserCircle,
    UserCirclePlus,
    List,
    XCircle,
} from "phosphor-react";
import { useState } from "react";

import style from "./styles.module.css";

export function AccountHeader() {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <header className={style.main_header}>
            <nav>
                <div className={style.logo_container}>
                    <a href="/">BINANCE</a>
                </div>


                {
                    !sidebarVisible ?
                    <button onClick={()=>setSidebarVisible(true)}><List /></button> 
                    :
                    <button onClick={()=>setSidebarVisible(false)}><XCircle /></button>

                }

                {
                    sidebarVisible &&
                    <div className={style.sidebar}>
                        <a href="/"  className={style.sidebar_logo}>BINANCE</a>

                        <div className={style.sidebar_auth_links}>
                            <a href="/signin"><UserCircle />Entrar</a>
                            <a href="/signup"><UserCirclePlus />Registar</a>
                        </div>
                    </div>
                }

            </nav>
        </header>
    );
}
