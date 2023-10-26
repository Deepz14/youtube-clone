import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import WatchVideos from './components/WatchVideos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
])

function App() {
  return (
    <div>
       <Header />
       <RouterProvider router={appRoutes}>
        <Body />
       </RouterProvider>
    </div>
  );
}

export default App;
