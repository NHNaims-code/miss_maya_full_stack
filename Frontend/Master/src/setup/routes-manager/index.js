import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ComboAuthentication from "../../pages/combo-authentication";
import Dashboard from "../../pages/dashboard";
import NotFound from "../../pages/not-found";

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/authentication" element={<ComboAuthentication />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;