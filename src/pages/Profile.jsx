import React from "react";

import { AccountHeader } from "../components/account_header/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";
import { ContactAdmin } from "../features/profilepage/components/contact_admin/Index";
import { Main } from "../features/profilepage/components/main/Index";

export function Profile() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <ContactAdmin />
            <BottomNavigation route={"profile"} />
        </div>
    );
}
