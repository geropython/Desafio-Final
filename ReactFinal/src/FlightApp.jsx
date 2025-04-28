import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"

export const FlightApp = () => {
    return (
        <div className="container">
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<div>Bienvenido a la app de vuelos</div>} />
                <Route path="/detalle-vuelo" element={<div>Detalle de vuelo</div>} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}
