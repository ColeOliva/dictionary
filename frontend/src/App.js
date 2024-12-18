import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorProvider } from "./context/ErrorContext";
import { WordProvider } from "./context/WordContext";
import Root from "./Layout/Root";
import Loading from "./Pages/Loading";

// import Home from './Pages/Home';
const Home = lazy(() => import("./Pages/Home"));

// import WordList from './Pages/WordList';
const WordList = lazy(() => import("./Pages/WordList"));
const Error = lazy(() => import("./Pages/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, // tells route to be same as parent
        element: <Home />,
      },
      {
        path: "/word-list",
        element: <WordList />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ErrorProvider>
      <WordProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </WordProvider>
    </ErrorProvider>
  );
};

export default App;
