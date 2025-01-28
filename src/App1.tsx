import { BrowserRouter } from 'react-router';
import { useRoutes } from 'react-router';
import Home from './routes/Home';
import Login from './routes/Login';
function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    { path: '/login', element: <Login /> },
  ]);
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}
export default App;
