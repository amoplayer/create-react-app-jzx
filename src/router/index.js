import home from '../pages/home'
import about from '../pages/about'
import expertCloud from '../pages/expertCloud'
import personnelProduct from '../pages/personnelProduct'
export const routesList = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/expertCloud',
        name: 'expertCloud',
        component: expertCloud
    },
    {
        path: '/personnelProduct',
        name: 'personnelProduct',
        component: personnelProduct
    }
]

