import { Slide } from "../slide/Index";

import { Table } from "../main_table/Index";
import style from "./styles.module.css";
import { Cambio } from "../cambio/Index";

export function DashboardContainer() {
    return (
        <div className={style.dashboard}>
            <Slide />

            <div className={style.dashboard_boxes}>
                <a href="/market">
                    <h3>Compra com USD</h3>
                    <p>M-pesa, E-mola...</p>
                </a>
                <a href="/deposit_money">
                    <h3>Depositar</h3>
                    <p>Variações de pagamento...</p>
                </a>
                <a href="/transfer_money">
                    <h3>Trading</h3>
                    <p>Transferencia bancaria, M-pesa, E-mola...</p>
                </a>
            </div>
            <br />

            <Table />
            <br />
            <br />
            <strong
                style={{
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    marginBlock: 20,
                    display: "block",
                }}
            >
                Taxa de cambio:
            </strong>
            <Cambio />
        </div>
    );
}
