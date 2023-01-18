// import { useState } from "react";
import { XCircle } from "phosphor-react";
import Style from "./Style.module.css";

export const PaymentModal = ({ close }) => {
    // submit values
    const closeModal = async () => {
        close();
    };

    return (
        <div className={Style.Menu_Modal}>
            <div className={Style.Menu_Modal_box} data-aos="fade-down">
                <button onClick={closeModal} className={Style.Menu_Modal_close}>
                    <XCircle
                        size={35}
                        weight="fill"
                        color="rgb(50, 170, 225)"
                    />
                </button>

                <div className={Style.Menu_Modal_content}>
                    <div className={Style.description}>
                        <strong>Descrição:</strong>

                        <div className={Style.description_row}>
                            <p>Custo unitario</p>
                            <span>50,00MT</span>
                        </div>
                        <div className={Style.description_row}>
                            <p>Taxa de serviço</p>
                            <span>10,00MT</span>
                        </div>
                        <div className={Style.description_row}>
                            <p>Custo Total</p>
                            <span>60,00MT</span>
                        </div>
                    </div>

                    <strong>Importante:</strong>

                    <p>
                        Todos os dados recolhidos nessa janela serão usados para
                        efetuar o pagamento, certifique-se de preencher
                        correctamente o formulario com seus dados correctos.
                    </p>

                    <form>
                        <button>PROSSEGUIR</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
