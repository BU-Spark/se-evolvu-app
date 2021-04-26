
import UserDashboard from '../components/Dashboards/User/index.js';
import Homepage from '../components/Homepage/index.js';

// import CoachCalendar from '../components/Dashboards/Coach/Calendar/index.js'
// import CoachHistory from '../components/Dashboards/Coach/History/index.js'
// import CoachPayment from '../components/Dashboards/Coach/Payments/index.js'
// import CoachProfile from '../components/Dashboards/Coach/Calendar/index.js'
// import CoachDashboard from '../components/Dashboards/Coach/Calendar/index.js'

import CoachDash from '../components/Dashboards/Coach/Dashboard/index.js';
import Dashboard from '../components/Dashboards/index.js';
import CoachCalendar from '../components/Dashboards/Coach/Calendar/index.js';
import CoachProfileForm from '../components/Dashboards/Coach/Profile/index.js';
import SessionHistory from '../components/Dashboards/Coach/History/index.js';
import PaymentHistory from '../components/Dashboards/Coach/Payments/index.js';
import SearchPage from '../components/SearchPage/index.js';
import LoginPage from '../components/LoginPage/index.js';
import RegisterPage from '../components/RegisterPage/index.js';
import CoachApplyLanding from "../components/CoachApp/CoachApplyLanding";
import CoachEligibility from "../components/CoachEligibility/index.js";
import CoachApplication from "../components/CoachApp/CoachApplication/index.js";
import About from "../components/About";
import Contact from "../components/Contact";
import Privacy from "../components/Privacy";
import Testimonial from "../components/Testimonial";
import Safety from "../components/Safety";

const unprotectedRoutes = [
    {
        path: "/",
        component: Homepage
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/register",
        component: RegisterPage
    },
    {
        path: "/search",
        component: SearchPage
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/privacy",
        component: Privacy
    },
    {
        path: "/testimonial",
        component: Testimonial
    },
    {
        path: "/safety",
        component: Safety
    },
    {
        path: "/apply",
        component: CoachApplyLanding
    },
    {
        path: "/eligibility",
        component: CoachEligibility
    },
    {
        path: "/application",
        component: CoachApplication
    },
];

const protectedRoutes = [
    {
        path: "/dashboard",
        component: Dashboard
    },
    {
        path: "/user/dashboard",
        component: UserDashboard
    },
    {
        path: "/coach/dashboard",
        component: CoachDash
    },
    {
        path: "/coach/calendar",
        component: CoachCalendar
    },
    {
        path: "/coach/history",
        component: SessionHistory
    },
    {
        path: "/coach/payment",
        component: PaymentHistory
    },
    {
        path: "/coach/profile",
        component: CoachProfileForm
    }

]

let routes = {
    unprotected: unprotectedRoutes,
    protected: protectedRoutes
}

export default routes;