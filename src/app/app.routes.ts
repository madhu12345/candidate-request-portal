import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { CandidateDashboardComponent } from './pages/candidate-dashboard/candidate-dashboard';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard';
import { CreateRequestComponent } from './pages/create-request/create-request';
import { MyRequestsComponent } from './pages/my-requests/my-requests';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'candidate', component: CandidateDashboardComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'create-request', component: CreateRequestComponent },
  { path: 'my-requests', component: MyRequestsComponent }
];
