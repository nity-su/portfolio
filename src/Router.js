import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/feature/Layout";
import Home from "./pages/Home/Home";
import IntroduceProject from "./pages/IntoduceProject/IntoduceProject";
import Hambuger from "./components/ui/hambugerMenu/menu";

export const BrowserRouterInRouter = BrowserRouter;

export default function Router() {
  return (
    <BrowserRouter>
      <Hambuger />
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<IntroduceProject />} path="project/:name" />
        </Route>
        {/* <Route element={<IntroduceProject />} path="/project/:name" /> */}
      </Routes>
    </BrowserRouter>
  );
}

/* <Route element={<IntroduceProject />} path="project/:id" /> */
