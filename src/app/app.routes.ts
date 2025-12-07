import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalExample } from './components/signal-example/signal-example';
import { AttributeDirective } from './components/attribute-directive/attribute-directive';
import { GetApiExample } from './components/get-api-example/get-api-example';
import { ReactiveUserForm } from './components/reactive-user-form/reactive-user-form';
import { PipesExample } from './components/pipes-example/pipes-example';
import { ResourceApi } from './components/resource-api/resource-api';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: "login",
        component: Login
    },
    {
        path:'',
        component: Layout,
        children: [ 
            {
                path: "users",
                component: User
            },
            {
                path: "control-flow",
                component: ControlFlow
            },
            {
                path: "data-binding",
                component: DataBinding
            },
            {
                path: "signal",
                component: SignalExample
            },
            {
                path: "attribute-dir",
                component: AttributeDirective
            },
            {
                path: "get-api",
                component: GetApiExample
            },
            {
                path: "user-reactive",
                component: ReactiveUserForm
            },
            {
                path: "pipes-example",
                component: PipesExample
            },
            {
                path: "resource-api",
                component: ResourceApi
            },
        ]
    },
];
