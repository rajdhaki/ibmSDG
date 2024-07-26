import React from "react";
import "./index.css";
import Cursor from "./elements/Cursor";
import ContextProvider from "./context/contextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Home from "./pages/Home";
import About from "./components/About";
import Footer from './components/Footer';
import Articles from "./pages/Articles";
import SDG from "./articles/SDG";
import SDG1 from "./articles/SDG1";
import SDG2 from "./articles/SDG2";
import SDG3 from "./articles/SDG3";
import SDG4 from "./articles/SDG4";
import SDG5 from "./articles/SDG5";
import SDG6 from "./articles/SDG6";
import SDG7 from "./articles/SDG7";
import SDG8 from "./articles/SDG8";
import SDG9 from "./articles/SDG9";
import SDG10 from "./articles/SDG10";
import SDG11 from "./articles/SDG11";
import SDG12 from "./articles/SDG12";
import SDG13 from "./articles/SDG13";
import SDG14 from "./articles/SDG14";
import SDG15 from "./articles/SDG15";
import SDG16 from "./articles/SDG16";
import SDG17 from "./articles/SDG17";

//routes
const router = createBrowserRouter([
  {
    path: "/article",
    element: <Articles />,
    children: [
      {
        index: true,
        element: <SDG />,
      },
      {
        path: "sdg",
        element: <SDG />,
      },
      {
        path: "sdg1",
        element: <SDG1 />,
      },
      {
        path: "sdg2",
        element: <SDG2 />,
      },
      {
        path: "sdg3",
        element: <SDG3 />,
      },
      {
        path: "sdg4",
        element: <SDG4 />,
      },
      {
        path: "sdg5",
        element: <SDG5 />,
      },
      {
        path: "sdg6",
        element: <SDG6 />,
      },
      {
        path: "sdg7",
        element: <SDG7 />,
      },
      {
        path: "sdg8",
        element: <SDG8 />,
      },
      {
        path: "sdg9",
        element: <SDG9 />,
      },
      {
        path: "sdg10",
        element: <SDG10 />,
      },
      {
        path: "sdg11",
        element: <SDG11 />,
      },
      {
        path: "sdg12",
        element: <SDG12 />,
      },
      {
        path: "sdg13",
        element: <SDG13 />,
      },
      {
        path: "sdg14",
        element: <SDG14 />,
      },
      {
        path: "sdg15",
        element: <SDG15 />,
      },
      {
        path: "sdg16",
        element: <SDG16 />,
      },
      {
        path: "sdg17",
        element: <SDG17 />,
      },
    ],
  },
  {
    path: "/",
    element:<><Navbar/><Home /><Footer/></>,
  },
  {
    path:"/aboutus",
    element:<><Navbar/><About/></>,
  },
  {
    path: "/news",
    element: <News />,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
    // <ContextProvider>
    //   <RouterProvider router={router}>
    //     <Cursor />
    //   </RouterProvider>
    // </ContextProvider>
  );
}

export default App;
