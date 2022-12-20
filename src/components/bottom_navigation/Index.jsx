import { HouseLine, User, Storefront, TShirt } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import style from "./styles.module.css";

export function BottomNavigation({route}) {
    const navigate = useNavigate()

    const navigateToPage = async (rota) =>{
        navigate(`/${rota}`)
    }

    return (
        <div className={style.bottom_navigation}>
            <button onClick={()=>navigateToPage('dashboard')}>
                <HouseLine color={route === "dashboard" ? "rgb(255, 223, 44)" : "rgba(157, 109, 235, 1)"} weight='fill'/>
                {route === 'feed' && <span>Inicio</span>}
            </button>
            <button onClick={()=>navigateToPage('dashboard')}>
                <Storefront color={route === "stores" ? "rgb(255, 223, 44)" : "rgba(157, 109, 235, 1)"} weight='fill'/>
                {route === 'stores' && <span>Lojas</span>}
            </button>
            <button onClick={()=>navigateToPage('dashboard')}>
                <TShirt color={route === "colections" ? "rgb(255, 223, 44)" : "rgba(157, 109, 235, 1)"} weight='fill'/>
                {route === 'colections' && <span>Coleções</span>}
            </button>
            <button onClick={()=>navigateToPage('dashboard')}>
                <User color={route === "profile" ? "rgb(255, 223, 44)" : "rgba(157, 109, 235, 1)"} weight='fill'/>
                {route === 'profile' && <span>Perfil</span>}
            </button>
        </div>
    );
}
