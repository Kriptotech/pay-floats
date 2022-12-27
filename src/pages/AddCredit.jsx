import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/add_credit/components/main/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";

export function AddCredit() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <BottomNavigation />
        </div>
    );
}
