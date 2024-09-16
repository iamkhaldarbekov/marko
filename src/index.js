import './index.css';
import {createRoot} from 'react-dom/client';
import {RouterProvider, createHashRouter} from 'react-router-dom';

import {routes} from './routes';

const router = createHashRouter(routes);

createRoot(document.querySelector("#application")).render(<RouterProvider router={router} />)