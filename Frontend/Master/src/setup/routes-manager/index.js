import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SixSevenFigureBusinessVenture from "../../pages/67FigureBusinessVenture";
import ComboAuthentication from "../../pages/combo-authentication";
import ContactCenter from "../../pages/contact_center";
import Dashboard from "../../pages/dashboard";
import NotFound from "../../pages/not-found";
import Subscribe from "../../pages/subscribe";
import Private from "./private";

const AppRoutes = () => {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Private><Dashboard /></Private>}/>
        <Route path="/auth" element={<ComboAuthentication />}/>
        <Route path="/6_7_figure_business_venture" element={<Private><SixSevenFigureBusinessVenture /></Private>}/>
        <Route path="/contact_us" element={<Private><ContactCenter /></Private>}/>
        <Route path="/subscribe" element={<Private><Subscribe /></Private>}/>
        <Route path="*" element={<Private><NotFound /></Private>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;