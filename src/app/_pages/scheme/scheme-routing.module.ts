import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemeComponent } from './scheme.component';


const route: Routes = [
    {
        path: '',
        component: SchemeComponent,
        children: [
            {
                path: '',
                component: SchemeComponent,
                // resolve: {
                //       users: AboutUsersResolve
                // }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [RouterModule],
    declarations: []
})

export class SchemeRouteModule { }
