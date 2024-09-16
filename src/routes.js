import Layout from './Layout';
import {Home, About, Projects, Contact, Pricing, Tercon} from './pages';

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/pricing',
                element: <Pricing />
            },
            {
                path: '/terms-and-conditions',
                element: <Tercon />
            }
        ]
    }
]