import { useState } from "react";
import { InNegociationTable } from "../in_negocitaions_table/Index";
import { LastNegociationTable } from "../last_negocitaions_table/Index";
import { MyNegociationTable } from "../my_negocitaions_table/Index";
import style from "./styles.module.css";

import { Graphic } from "../graphic/Index";

export function Main() {
    const [inNegociations, setInNegociations] = useState(true);
    const [lastNegociations, setLastNegociations] = useState(false);
    const [myNegociations, setMyNegociations] = useState(false);

    return (
        <div className={style.market}>
            <Graphic />
            <div className={style.market_options_container}>
                <div className={style.market_options}>
                    <button
                        style={{
                            background: inNegociations && "rgb(84, 170, 195)",
                            color: inNegociations && "white",
                        }}
                        onClick={() => {
                            setLastNegociations(false);
                            setMyNegociations(false);
                            setInNegociations(true);
                        }}
                    >
                        em negociações
                    </button>
                    <button
                        style={{
                            background: lastNegociations && "rgb(84, 170, 195)",
                            color: lastNegociations && "white",
                        }}
                        onClick={() => {
                            setInNegociations(false);
                            setMyNegociations(false);
                            setLastNegociations(true);
                        }}
                    >
                        ultimas negociações
                    </button>
                    <button
                        style={{
                            background: myNegociations && "rgb(84, 170, 195)",
                            color: myNegociations && "white",
                        }}
                        onClick={() => {
                            setLastNegociations(false);
                            setInNegociations(false);
                            setMyNegociations(true);
                        }}
                    >
                        minhas negociações
                    </button>
                </div>
            </div>

            {inNegociations && <InNegociationTable />}
            {lastNegociations && <LastNegociationTable />}
            {myNegociations && <MyNegociationTable />}
        </div>
    );
}
