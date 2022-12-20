import React from "react";

import { Header } from "../components/header/Index";
import { CompanyEarns } from "../features/homepage/components/company_earns/Index";
import { CreatePortfolio } from "../features/homepage/components/create_portfolio/Index";
import { ExplorePossibilities } from "../features/homepage/components/explore_possibilities/Index";
import { Hero } from "../features/homepage/components/hero/Index";
import { NeedHelp } from "../features/homepage/components/need_help/Index";
import { Numbers } from "../features/homepage/components/numbers/Index";
import { StartWinning } from "../features/homepage/components/start_winning/Index";
import { Trust } from "../features/homepage/components/trust/Index";

export function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <Numbers />
            <CreatePortfolio />
            <CompanyEarns />
            <ExplorePossibilities />
            <Trust />
            <NeedHelp />
            <StartWinning />
        </div>
    );
}
