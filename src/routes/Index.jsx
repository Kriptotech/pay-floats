import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Login } from "../pages/Login";
import { Homepage } from "../pages/Homepage";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { BuyCoin } from "../pages/BuyCoin";
import { SellCoin } from "../pages/SellCoin";
import { Profile } from "../pages/Profile";
import { RequestMoney } from "../pages/RequestMoney";
import { DepositMoney } from "../pages/DepositMoney";
import { Termspage } from "../pages/Terms";
import { Politicspage } from "../pages/Politics";
import { AddCredit } from "../pages/AddCredit";
import { Carteiras } from "../pages/Carteiras";
import { Market } from "../pages/Market";
import { Levantar } from "../pages/Levantar";
import { TransferMoney } from "../pages/TransferMoney";

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/signin" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/terms" element={<Termspage />} />
                    <Route path="/politics" element={<Politicspage />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route
                        path="/buy_coin"
                        element={
                            <PrivateRoute>
                                <BuyCoin />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/sell_coin"
                        element={
                            <PrivateRoute>
                                <SellCoin />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/request_money"
                        element={
                            <PrivateRoute>
                                <RequestMoney />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/deposit_money"
                        element={
                            <PrivateRoute>
                                <DepositMoney />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/add_credit"
                        element={
                            <PrivateRoute>
                                <AddCredit />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/carteiras"
                        element={
                            <PrivateRoute>
                                <Carteiras />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/market"
                        element={
                            <PrivateRoute>
                                <Market />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/levantar"
                        element={
                            <PrivateRoute>
                                <Levantar />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/transfer_money"
                        element={
                            <PrivateRoute>
                                <TransferMoney />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
