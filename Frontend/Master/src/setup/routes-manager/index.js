import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import NotFound from "../../pages/not-found";

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;