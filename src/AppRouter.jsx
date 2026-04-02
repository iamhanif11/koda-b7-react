import { Routes, Route } from "react-router";

import App from "./pages/App"
import GeneratePoke from "./components/GeneratePoke";
// import Homepage from "./pages/Homepage";
import Layout from "./components/layout/Layout";
import ReviewPage from "./pages/ReviewPage";

function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<Layout><ReviewPage/></Layout>}></Route>
            <Route path="/App" element={<Layout><App/></Layout>}></Route>
            <Route path="/GeneratePoke" element={<Layout><GeneratePoke/></Layout>}></Route>
        </Routes>
    )
}

export default AppRouter