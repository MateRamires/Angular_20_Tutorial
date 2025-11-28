import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalExample } from './components/signal-example/signal-example';
import { AttributeDirective } from './components/attribute-directive/attribute-directive';
import { GetApiExample } from './components/get-api-example/get-api-example';
import { ReactiveUserForm } from './components/reactive-user-form/reactive-user-form';

export const routes: Routes = [
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
];
