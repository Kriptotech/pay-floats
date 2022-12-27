import React from "react";

import { Header } from "../components/header/Index";
import { Main } from "../features/politics/components/main/Index";
import { Footer } from "../components/footer/Index";

export function Politicspage() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
