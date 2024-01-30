/*=============================================================================
File: routes.js
-------------------------------------------------------------------------------
Description: 
=============================================================================*/
import Homepage from './components/Homepage';
import Users from './components/Users';
import Cpluses from './components/CplusPluses';
import JavaScripts from './components/JavaScripts';
import Pythons from './components/Pythons';
import CompareLangs from './components/CompareLanguages';
import QuickRefs from './components/QuickReferences';

//import  from './components/';

const routes = [
    {
        path: '/', 
        component: <Homepage />, 
        exact: true
    }, {
        path: '/login', 
        component: <Users />
    }, {
        path: '/cplusplus', 
        component: <Cpluses />
    }, {
        path: '/javascript', 
        component: <JavaScripts />
    }, {
        path: '/python', 
        component: <Pythons />
    }, {
        path: '/comparelanguages', 
        component: <CompareLangs />
    }, {
        path: '/quickrefs', 
        component: <QuickRefs /> 
    }
]

export default routes;
/* 
    , {
        path: '/', 
        component: < />
    }
*/