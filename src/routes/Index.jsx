import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Login } from "../pages/Login";
import { Homepage } from "../pages/Homepage";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";


export function Router() { 

    

    return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/signin" element={<Login />} />
                        <Route path="/signup" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </div>
            
    );
}
