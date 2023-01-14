import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/levantar/components/main/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";

export function Levantar() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <BottomNavigation route={"deposit_money"} />
        </div>
    );
}
