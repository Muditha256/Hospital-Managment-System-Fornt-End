import { Routes } from '@angular/router';
import { AppoinmentManageComponent } from './appoinment-manage/appoinment-manage.component';
import { PatientManageComponent } from './page/patient-manage/patient-manage.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { DashBordPageComponent } from './page/dash-bord-page/dash-bord-page.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path:"",
        component:LoginPageComponent
    },
    {
        path:"appoinment",
        component:AppoinmentManageComponent
    },
    {
        path:"patient",
        component:PatientManageComponent
    },
    {
        path:"dashbord",
        component:DashBordPageComponent,
        children:[
            {
                path:"appoinment",
                component:AppoinmentManageComponent
            },
            {
                path:"patient",
                component:PatientManageComponent
            }
            
        ]
    }
];
