import React from "react";
import { AccountHeader } from "../components/account_header/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";
import { DashboardContainer } from "../features/dashboard/components/main/Index";



export function Dashboard() {
    return (
        <div>
            <AccountHeader />
            <DashboardContainer />
            <BottomNavigation route='dashboard' />
        </div>
    );
}
