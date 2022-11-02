import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Router/Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
        <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
