import {
    HouseLine,
    User,
    ChartBar,
    CurrencyCircleDollar,
    Bag,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";

import style from "./styles.module.css";

export function BottomNavigation({ route }) {
    const navigate = useNavigate();

    const navigateToPage = async (rota) => {
        navigate(`/${rota}`);
    };

    return (
        <div className={style.bottom_navigation}>
            <button onClick={() => navigateToPage("dashboard")}>
                <HouseLine
                    color={
                        route === "dashboard"
                            ? "rgb(255, 223, 44)"
                            : "rgba(157, 109, 235, 1)"
                    }
                    weight={route === "dashboard" ? "fill" : "duotone"}
                    size={30}
                />
                {route === "dashboard" && (
                    <span
                        style={{
                            color: route === "dashboard" && "rgb(255, 223, 44)",
                        }}
                    >
                        Inicio
                    </span>
                )}
            </button>
            <button onClick={() => navigateToPage("market")}>
                <ChartBar
                    color={
                        route === "market"
                            ? "rgb(255, 223, 44)"
                            : "rgba(157, 109, 235, 1)"
                    }
                    weight={route === "market" ? "fill" : "duotone"}
                    size={35}
                />
                {route === "market" && (
                    <span
                        style={{
                            color: route === "market" && "rgb(255, 223, 44)",
                        }}
                    >
                        Mercado
                    </span>
                )}
            </button>
            <button onClick={() => navigateToPage("request_money")}>
                <CurrencyCircleDollar
                    color={
                        route === "request_money"
                            ? "rgb(255, 223, 44)"
                            : "rgba(157, 109, 235, 1)"
                    }
                    weight={route === "request_money" ? "fill" : "duotone"}
                    size={35}
                />
                {route === "request_money" && (
                    <span
                        style={{
                            color:
                                route === "request_money" &&
                                "rgb(255, 223, 44)",
                        }}
                    >
                        Requisitar
                    </span>
                )}
            </button>
            <button onClick={() => navigateToPage("carteiras")}>
                <Bag
                    color={
                        route === "carteiras"
                            ? "rgb(255, 223, 44)"
                            : "rgba(157, 109, 235, 1)"
                    }
                    weight={route === "carteiras" ? "fill" : "duotone"}
                    size={30}
                />
                {route === "carteiras" && (
                    <span
                        style={{
                            color: route === "carteiras" && "rgb(255, 223, 44)",
                        }}
                    >
                        Carteiras
                    </span>
                )}
            </button>
            <button onClick={() => navigateToPage("profile")}>
                <User
                    color={
                        route === "profile"
                            ? "rgb(255, 223, 44)"
                            : "rgba(157, 109, 235, 1)"
                    }
                    weight={route === "profile" ? "fill" : "duotone"}
                    size={30}
                />
                {route === "profile" && (
                    <span
                        style={{
                            color: route === "profile" && "rgb(255, 223, 44)",
                        }}
                    >
                        Perfil
                    </span>
                )}
            </button>
        </div>
    );
}
