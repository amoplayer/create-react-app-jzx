import home from '../pages/home'
import about from '../pages/about'
import expertCloud from '../pages/expertCloud'
import personnelProduct from '../pages/personnelProduct'
import taxProduct from '../pages/taxProduct'
import valueAddedServices from '../pages/valueAddedServices'
import articleList from '../pages/article/list'
export default [
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
    },
    {
        path: '/taxProduct',
        name: 'taxProduct',
        component: taxProduct
    },
    {
        path: '/valueAddedServices',
        name: 'valueAddedServices',
        component: valueAddedServices
    },
    {
        path: '/articleList',
        name: 'articleList',
        component: articleList
    }
]

