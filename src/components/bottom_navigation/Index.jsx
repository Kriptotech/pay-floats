import {
    HouseLine,
    User,
    PlusCircle,
    CurrencyCircleDollar,
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
                    weight="fill"
                    size={30}
                />
                {route === "dashboard" && <span>Inicio</span>}
            </button>
            <button onClick={() => navigateToPage("sell_coin")}>
                <PlusCircle
                    color={
                        route === "sell_coin"
                            ? "rgb(255, 223, 44)"
                            : "rgba(157, 109, 235, 1)"
                    }
                    weight="fill"
                    size={35}
                />
                {route === "sell_coin" && <span>Vender</span>}
            </button>
            <button onClick={() => navigateToPage("request_money")}>
                <CurrencyCircleDollar
                    color={
                        route === "request_money"
                            ? "rgb(255, 223, 44)"
                            : "rgba(157, 109, 235, 1)"
                    }
                    weight="fill"
                    size={35}
                />
                {route === "request_money" && <span>Requisitar</span>}
            </button>
            <button onClick={() => navigateToPage("profile")}>
                <User
                    color={
                        route === "profile"
                            ? "rgb(255, 223, 44)"
                            : "rgba(157, 109, 235, 1)"
                    }
                    weight="fill"
                    size={30}
                />
                {route === "profile" && <span>Perfil</span>}
            </button>
        </div>
    );
}
