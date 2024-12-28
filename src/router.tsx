import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cardapio from "./pages/Cardapio/Cardapio";
import Localizacao from "./pages/Localizacao/Localizacao";
import Promocoes from "./pages/Promocoes/Promocoes";
import Contato from "./pages/Contato/Contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cardapio",
    element: <Cardapio />,
  },
  {
    path: "/localizacao",
    element: <Localizacao />,
  },
  {
    path: "/promocoes",
    element: <Promocoes />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
]);

export default router;
