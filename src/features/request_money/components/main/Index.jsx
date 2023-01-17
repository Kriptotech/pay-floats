import { useState } from "react";
import style from "./styles.module.css";
import { PaymentModal } from "../PaymentModal/Index";

const list = [
    {
        name: "Ecobank",
        path: "/images/carteiras/ecobank.jpg",
    },
    {
        name: "Accesbank",
        path: "/images/carteiras/acces-bank.png",
    },
    {
        name: "Emola",
        path: "/images/carteiras/emola.png",
    },
    {
        name: "Letshego",
        path: "/images/carteiras/letshego.png",
    },
    {
        name: "Mpesa",
        path: "/images/carteiras/mpesa.png",
    },
    {
        name: "Needbank",
        path: "/images/carteiras/needbank.png",
    },
    {
        name: "Paypal",
        path: "/images/carteiras/paypal.png",
    },
    {
        name: "Ponto24",
        path: "/images/carteiras/ponto24.png",
    },
];

export function Main() {
    // states
    const [message, setMessage] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedFrom, setSelectedFrom] = useState(true);
    const [selectedTo, setSelectedTo] = useState(true);
    const [requestFromInput, setRequestFromInput] = useState(
        "Insira o seu NIB da conta bancaria"
    );
    const [requestToInput, setRequestToInput] = useState(
        "Insira o seu NIB da conta bancaria"
    );

    const [selectedFromImage, setSelectedFromImage] = useState({
        name: "Ecobank",
        path: "/images/carteiras/ecobank.jpg",
    });
    const [selectedToImage, setSelectedToImage] = useState({
        name: "Ecobank",
        path: "/images/carteiras/ecobank.jpg",
    });

    async function submitForm(e) {
        e.preventDefault();
        setIsModalVisible(true);
        setMessage("");
    }

    async function changeRequestFromInput(data) {
        if (data.name === "Ecobank") {
            setRequestFromInput("Insira o seu NIB da conta bancaria Ecobank");
        }
        if (data.name === "Accesbank") {
            setRequestFromInput("Insira o seu NIB da conta bancaria Accesbank");
        }
        if (data.name === "Emola") {
            setRequestFromInput("Insira o seu numero Emola");
        }
        if (data.name === "Letshego") {
            setRequestFromInput("Insira o seu NIB da conta bancaria Letshego");
        }
        if (data.name === "Mpesa") {
            setRequestFromInput("Insira o seu numero Mpesa");
        }
        if (data.name === "Needbank") {
            setRequestFromInput("Insira o seu NIB da conta bancaria Needbank");
        }
        if (data.name === "Paypal") {
            setRequestFromInput("Insira o seu e-mail para o seu Paypal");
        }
        if (data.name === "Ponto24") {
            setRequestFromInput("Insira o seu numero ponto24");
        }
    }
    async function changeRequestToInput(data) {
        if (data.name === "Ecobank") {
            setRequestToInput("Insira o seu NIB da conta bancaria Ecobank");
        }
        if (data.name === "Accesbank") {
            setRequestToInput("Insira o seu NIB da conta bancaria Accesbank");
        }
        if (data.name === "Emola") {
            setRequestToInput("Insira o seu numero Emola");
        }
        if (data.name === "Letshego") {
            setRequestToInput("Insira o seu NIB da conta bancaria Letshego");
        }
        if (data.name === "Mpesa") {
            setRequestToInput("Insira o seu numero Mpesa");
        }
        if (data.name === "Needbank") {
            setRequestToInput("Insira o seu NIB da conta bancaria Needbank");
        }
        if (data.name === "Paypal") {
            setRequestToInput("Insira o seu e-mail para o seu Paypal");
        }
        if (data.name === "Ponto24") {
            setRequestToInput("Insira o seu numero ponto24");
        }
    }

    return (
        <div className={style.request_money}>
            <div className={style.request_money_header}>
                <img src="/images/person-paying.webp" alt="" />
            </div>

            <div className={style.request_money_row_container}>
                <form onSubmit={(e) => submitForm(e)}>
                    <h4>Requisite dinheiro</h4>
                    <p>
                        Preencha os campos abaixo para requisitar dinheiro de
                        uma carteira para outra, caso tenha cometido um erro,
                        contacte o administrador para corrigi-lo.
                    </p>

                    <div>
                        <br />
                        <p>
                            <img src={selectedFromImage.path} alt="" />
                            De: {selectedFromImage.name}
                        </p>
                        <select
                            required
                            onChange={(e) => {
                                setSelectedFrom(true);
                                setSelectedFromImage(
                                    JSON.parse(e.target.value)
                                );
                                changeRequestFromInput(
                                    JSON.parse(e.target.value)
                                );
                            }}
                        >
                            {list.map((v) => {
                                return (
                                    <option
                                        value={JSON.stringify(v)}
                                        key={v.name}
                                    >
                                        {v.name}
                                    </option>
                                );
                            })}
                        </select>
                        {selectedFrom && (
                            <input
                                required
                                placeholder={requestFromInput}
                                type="text"
                            />
                        )}

                        <p>
                            <img src={selectedToImage.path} alt="" /> Para:{" "}
                            {selectedToImage.name}
                        </p>
                        <select
                            required
                            onChange={(e) => {
                                setSelectedTo(true);
                                setSelectedToImage(JSON.parse(e.target.value));
                                changeRequestToInput(
                                    JSON.parse(e.target.value)
                                );
                            }}
                        >
                            {list.map((v) => {
                                return (
                                    <option
                                        value={JSON.stringify(v)}
                                        key={v.name}
                                    >
                                        {v.name}
                                    </option>
                                );
                            })}
                        </select>
                        {selectedTo && (
                            <input
                                required
                                placeholder={requestToInput}
                                type="text"
                            />
                        )}

                        <input required placeholder="Motante" type="number" />
                    </div>
                    <br />
                    <p style={{ color: "violet" }}>{message}</p>
                    <button>REQUISITAR</button>
                </form>
            </div>
            {isModalVisible && (
                <PaymentModal close={() => setIsModalVisible(false)} />
            )}
        </div>
    );
}
