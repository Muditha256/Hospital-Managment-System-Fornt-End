import { Routes } from '@angular/router';
import { AppoinmentManageComponent } from './appoinment-manage/appoinment-manage.component';
import { PatientManageComponent } from './page/patient-manage/patient-manage.component';

export const routes: Routes = [
    {
        path:"appoinment",
        component:AppoinmentManageComponent
    },
    {
        path:"patient",
        component:PatientManageComponent
    }
];
