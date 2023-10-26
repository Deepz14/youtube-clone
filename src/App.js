import './App.css';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import WatchVideos from './components/WatchVideos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import appStore from "./store/store";


const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchVideos />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <Provider store={appStore}>
          <RouterProvider router={appRoutes}>
            <Body />
          </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
