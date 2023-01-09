import { Slide } from "../slide/Index";

import { Table } from "../table/Index";
import style from "./styles.module.css";

export function DashboardContainer() {
    return (
        <div className={style.dashboard}>
            <Slide />

            <div className={style.dashboard_boxes}>
                <a href="/dashboard">
                    <h3>Compra com USD</h3>
                    <p>M-pesa, E-mola...</p>
                </a>
                <a href="/dashboard">
                    <h3>Depositar</h3>
                    <p>Variações de pagamento...</p>
                </a>
                <a href="/dashboard">
                    <h3>Trading</h3>
                    <p>Transferencia bancaria, M-pesa, E-mola...</p>
                </a>
            </div>

            <Table />
        </div>
    );
}
