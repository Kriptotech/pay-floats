import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Login } from "../pages/Login";
import { Homepage } from "../pages/Homepage";
import { Register } from "../pages/Register";


export function Router() { 

    

    return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/signin" element={<Login />} />
                        <Route path="/signup" element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </div>
            
    );
}
