import { AuthRoute } from '@/components/Auth';
import { Login } from '@/pages/login/Login';
import { RouteObject } from 'react-router';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: (<AuthRoute><div>index</div></AuthRoute>),
    },
    {
        path: '/login',
        element: (<Login/>),
    }
]

