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
                    <strong>Importante:</strong>

                    <p>
                        Todos os dados recolhidos nessa janela serão usados para
                        efetuar o pagamento, certifique-se de preencher
                        correctamente o formulario com seus dados correctos.
                    </p>

                    <form>
                        <input
                            required
                            type="number"
                            placeholder="Numero M-pesa (+285)"
                        />
                        <button>PROSSEGUIR</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
