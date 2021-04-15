
import UserDashboard from '../components/Dashboards/User/index.js';
import Homepage from '../components/Homepage/index.js';

const unprotectedRoutes = [
    {
        path: "/testing",
        component: Homepage
    }
];

const protectedRoutes = [
    {
        path: "/user/dashboard",
        component: UserDashboard
    }

]

let routes = {
    unprotected: unprotectedRoutes,
    protected: protectedRoutes
}

export default routes;