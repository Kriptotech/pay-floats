import { UserCircle, UserCirclePlus, List, XCircle } from "phosphor-react";
import { useState } from "react";

import style from "./styles.module.css";

export function Header() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <header className={style.main_header}>
            <nav>
                <div className={style.logo_container}>
                    <a href="/">PayFloat</a>
                    <a className={style.invisible_links} href="/terms">
                        Termos e condições
                    </a>
                    <a className={style.invisible_links} href="/politics">
                        Politicas e privacidade
                    </a>
                </div>

                <div className={style.auth_links}>
                    <a href="/signin">
                        <UserCircle />
                        Entrar
                    </a>
                    <a href="/signup">
                        <UserCirclePlus />
                        Registar
                    </a>
                </div>

                {!sidebarVisible ? (
                    <button onClick={() => setSidebarVisible(true)}>
                        <List />
                    </button>
                ) : (
                    <button onClick={() => setSidebarVisible(false)}>
                        <XCircle />
                    </button>
                )}

                {sidebarVisible && (
                    <div className={style.sidebar}>
                        <a href="/" className={style.sidebar_logo}>
                            PayFloat
                        </a>

                        <div className={style.sidebar_auth_links}>
                            <a href="/signin">
                                <UserCircle />
                                Entrar
                            </a>
                            <a href="/signup">
                                <UserCirclePlus />
                                Registar
                            </a>

                            <a className={style.normal_links} href="/terms">
                                Termos e condições
                            </a>
                            <a className={style.normal_links} href="/politics">
                                Politicas e privacidade
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
