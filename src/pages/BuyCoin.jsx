import { AccountHeader } from "../components/account_header/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";
import { Main } from "../features/buy_coin/components/main/Index";

export function BuyCoin() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <BottomNavigation />
        </div>
    );
}
