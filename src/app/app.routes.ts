import { Routes } from '@angular/router';
import { AppoinmentManageComponent } from './page/appoinment-manage/appoinment-manage.component';
import { PatientManageComponent } from './page/patient-manage/patient-manage.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { DashBordPageComponent } from './page/dash-bord-page/dash-bord-page.component';
import { Component } from '@angular/core';
import { DashPageComponent } from './page/dash-page/dash-page.component';
import { PatientRootComponent } from './page/patient-root/patient-root.component';
import { AddPatientComponent } from './page/add-patient/add-patient.component';
import { AddAppointmentComponent } from './page/add-appointment/add-appointment.component';
import { AppointmentRootComponent } from './page/appointment-root/appointment-root.component';

export const routes: Routes = [
    {
        path:'',
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
                path:"",
                component:DashPageComponent
            },
            {
                path:"appointment",
                component:AppointmentRootComponent,
                children:[
                    {
                        path:"",
                        component:AppoinmentManageComponent
                    },
                    {
                        path:"add-appointment",
                        component:AddAppointmentComponent
                    },
                    {
                        path:"view-all",
                        component:AppoinmentManageComponent
                    }
                ]   
            },
            {
                path:"patient",
                component:PatientRootComponent,
                children:[
                    {
                        path:"",
                        component:PatientManageComponent
                    },
                    {
                        path:"add-patient",
                        component:AddPatientComponent
                    },
                    {
                        path:"manage-all",
                        component:PatientManageComponent
                    }
                ]
            }

            
        ]
    }
];
