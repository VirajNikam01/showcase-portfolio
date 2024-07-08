import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import TechStack from "./components/TechStack";
import AboutMe from "./components/AboutMe";
import WorkPage from "./components/WorkPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement:<ErrorPage/>
    },
    {
      path: "tech",
      element: <TechStack />,
    },
    {
      path: "about",
      element: <AboutMe />,
    },
    {
      path: "details/:index",
      element: <ProjectDetails />,
    },
    {
      path: "work",
      element: (
        <div>
          <Header />
          <WorkPage />
          <Footer />
        </div>
      ),
    },
  ]);

  return (
    <div className="app  px-3 ">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
