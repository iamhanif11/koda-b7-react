import { Routes, Route } from "react-router";

import App from "./App";
import GeneratePoke from "./components/GeneratePoke";
import Layout from "./components/layout/Layout";
import ReviewPage from "./pages/ReviewPage";
import ListChara from "./components/ListChara";
import DetailChara from "./components/DetailChara";
import FetchTest from "./components/Fetchtest";
import { Login } from "./pages/FormContext";
import { EditProfile } from "./pages/Profile";



function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <ReviewPage />
          </Layout>
        }
      ></Route>
      <Route
        path="/App"
        element={
          <Layout>
            <App />
          </Layout>
        }
      ></Route>
      <Route
        path="/GeneratePoke"
        element={
          <Layout>
            <GeneratePoke />
          </Layout>
        }
      ></Route>
      <Route path="/characters" element={<ListChara />}></Route>
      <Route path="/characters/:id/:slug" element={<DetailChara />}></Route>
      <Route path="/fetchtest" element={<FetchTest/>}></Route>
      <Route path="/edit-profile" element={<EditProfile/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  );
}

export default AppRouter;
