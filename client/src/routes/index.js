
import UserDashboard from '../components/Dashboards/User/index.js';
import Homepage from '../components/Homepage/index.js';

import CoachDash from '../components/Dashboards/Coach/Dashboard/index.js';
import Dashboard from '../components/Dashboards/index.js';
import CoachCalendar from '../components/Dashboards/Coach/Calendar/index.js';
import CoachProfileForm from '../components/Dashboards/Coach/Profile/index.js';
import CoachProfilePage from '../components/CoachProfilePage/index.js';
import ReviewFormPage from '../components/ReviewFormPage/index.js';
import SessionHistory from '../components/Dashboards/Coach/History/index.js';
import PaymentHistory from '../components/Dashboards/Coach/Payments/index.js';
import SearchPage from '../components/SearchPage/index.js';
import LoginPage from '../components/LoginPage/index.js';
import RegisterPage from '../components/RegisterPage/index.js';
import CoachApplyLanding from "../components/CoachApp/CoachApplyLanding";
import CoachEligibility from "../components/CoachApp/CoachEligibility/index.js";
import CoachApplication from "../components/CoachApp/CoachApplication/index.js";
import About from "../components/FooterPages/About";
import Contact from "../components/FooterPages/Contact";
import Privacy from "../components/FooterPages/Privacy";
import Testimonial from "../components/FooterPages/Testimonial";
import Safety from "../components/FooterPages/Safety";

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
    {
        path: "/coach/profile",
        component: CoachProfilePage
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
        path: "/coach/forms",
        component: CoachProfileForm
    },
    {
        path: "/review",
        component: ReviewFormPage
    }
]

let routes = {
    unprotected: unprotectedRoutes,
    protected: protectedRoutes
}

export default routes;