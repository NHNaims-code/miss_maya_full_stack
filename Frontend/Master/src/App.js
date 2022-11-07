import { useSelector } from "react-redux";
import AppRoutes from "./setup/routes-manager";

function App() {
  const theme = useSelector((state) => state.theme.value)

  return (
    <div id={theme.activeTheme}>
      <AppRoutes/>
    </div>
  );
}

export default App;
