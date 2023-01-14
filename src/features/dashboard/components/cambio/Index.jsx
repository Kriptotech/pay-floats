import { CurrencyDollar } from "phosphor-react";

import style from "./styles.module.css";

export function Cambio() {
    const list = [
        {
            name: "Rand",
            equals: "MT",
            value: 1,
            valueInCambio: 16,
            path: "/images/paises/Flag_of_South_Africa.png",
        },
        {
            name: "USD",
            equals: "MT",
            value: 1,
            valueInCambio: 65,
            path: "/images/paises/Flag_of_the_United_States.svg",
        },
        {
            name: "MT",
            equals: "USD",
            value: 1,
            valueInCambio: 0.015,
            path: "/images/paises/mozambique-national-flag.png",
        },
        {
            name: "MT",
            equals: "Rand",
            value: 1,
            valueInCambio: 0.0625,
            path: "/images/paises/mozambique-national-flag.png",
        },
    ];

    return (
        <div className={style.table}>
            <div className={style.table_container}>
                <div className={style.left}>
                    <small>Nome</small>
                    {list.map((v) => {
                        return (
                            <div>
                                <img src={v.path} alt="" />
                                {v.name}
                            </div>
                        );
                    })}
                </div>

                <div className={style.right}>
                    <div className={style.small_box}>
                        <small>Moeda</small>
                        <small>Cambio moeda</small>
                    </div>

                    {list.map((v) => {
                        return (
                            <div className={style.right_box}>
                                <div>
                                    <span>
                                        {v.value} {v.name}
                                    </span>
                                </div>
                                <span>
                                    {v.valueInCambio} {v.equals}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
