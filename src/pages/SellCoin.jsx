import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/sell_coin/components/main/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";

export function SellCoin() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <BottomNavigation route={"sell_coin"} />
        </div>
    );
}
