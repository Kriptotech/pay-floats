import React from "react";

import { AccountHeader } from "../components/account_header/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";
import { Main } from "../features/carteiras/components/main/Index";

export function Carteiras() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <BottomNavigation route={"carteiras"} />
        </div>
    );
}
