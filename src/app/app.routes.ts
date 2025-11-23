import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalExample } from './components/signal-example/signal-example';
import { AttributeDirective } from './components/attribute-directive/attribute-directive';

export const routes: Routes = [
    {
        path: "user",
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
];
