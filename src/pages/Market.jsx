import React from "react";
import { AccountHeader } from "../components/account_header/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";
import { Main } from "../features/market/components/main/Index";

export function Market() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <BottomNavigation route="market" />
        </div>
    );
}
