import {
    UserCirclePlus,
    List,
    XCircle,
    PlusCircle,
    HouseLine,
    CurrencyCircleDollar,
    CurrencyDollar,
} from "phosphor-react";
import { useState } from "react";

import style from "./styles.module.css";

export function AccountHeader() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <header className={style.main_header}>
            <nav>
                <div className={style.logo_container}>
                    <a href="/dashboard">PayFloat</a>
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
                        <a href="/dashboard" className={style.sidebar_logo}>
                            PayFloat
                        </a>

                        <div className={style.sidebar_auth_links}>
                            <a href="/dashboard">
                                <HouseLine />
                                Inicio
                            </a>
                            <a href="/add_credit">
                                <CurrencyDollar />
                                Adicionar saldo
                            </a>
                            <a href="/carteiras">
                                <CurrencyDollar />
                                Carteiras
                            </a>
                            <a href="/deposit_money">
                                <CurrencyDollar />
                                Depositar dinheiro
                            </a>
                            <a href="/request_money">
                                <CurrencyCircleDollar />
                                Requisitar dinheiro
                            </a>
                            <a href="/sell_coin">
                                <PlusCircle />
                                Vender moeda
                            </a>
                            <a href="/profile">
                                <UserCirclePlus />
                                Perfil
                            </a>

                            <button>
                                <XCircle />
                                Sair
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
