import { AccountHeader } from "../components/account_header/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";
import { Main } from "../features/request_money/components/main/Index";

export function RequestMoney() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <BottomNavigation route="request_money" />
        </div>
    );
}
