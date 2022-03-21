import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutWithoutMenuComponent } from './layout/layout-without-menu/layout-without-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { LandingPageComponent } from './share/landing-page/landing-page.component';
// import { PageNotFoundComponent } from './share/page-not-found/page-not-found.component';
import { HomeComponent } from './view/home/home.component';
import { PropertyListViewComponent } from './view/properties/property-list-view/property-list-view.component';
import { PropertyListComponent } from './view/properties/property-list/property-list.component';
import { PropertyComponent } from './view/properties/property/property.component';
import { SignInComponent } from './view/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './view/authentication/sign-up/sign-up.component';
import { JobComponent } from './view/jobs/job/job.component';
import { AutomobileComponent } from './view/automobiles/automobile/automobile.component';
import { AutomobileListViewComponent } from './view/automobiles/automobile-list-view/automobile-list-view.component';
import { AutomobileListComponent } from './view/automobiles/automobile-list/automobile-list.component';
import { JobListComponent } from './view/jobs/job-list/job-list.component';
import { JobListViewComponent } from './view/jobs/job-list-view/job-list-view.component';
import { JobProfileComponent } from './view/jobs/job-profile/job-profile.component';
import { JobAccountSettingComponent } from './view/jobs/job-account-setting/job-account-setting.component';
import { DashboardComponent } from './view/admin/property-dashboard/dashboard.component';
import { BrokerpadLayoutComponent } from './layout/brokerpad-layout/brokerpad-layout.component';
import { BrokerpadLayoutSidebarComponent } from './layout/brokerpad-layout-sidebar/brokerpad-layout-sidebar.component';
import { AdminAddListComponent } from './view/admin/admin-add-list/admin-add-list.component';
import { AgencyRegistrationComponent } from './view/registration-form/agency-registration/agency-registration.component';
import { PerformanceDashboardComponent } from './view/admin/property-dashboard/performance-dashboard/performance-dashboard/performance-dashboard.component';
import { ManageStaffComponent } from './view/admin/property-dashboard/agency/manage-staff/manage-staff.component';
import { ManageStaffAddListComponent } from './view/admin/property-dashboard/agency/manage-staff/manage-staff-add-list/manage-staff-add-list.component';
import { ManageTeamsComponent } from './view/admin/property-dashboard/agency/manage-teams/manage-teams.component';
import { MarketingPortalComponent } from './view/admin/property-dashboard/agency/marketing-portal/marketing-portal.component';
import { WatermarkSettingComponent } from './view/admin/property-dashboard/agency/watermark-setting/watermark-setting.component';
import { CompanyProfileComponent } from './view/admin/property-dashboard/agency/company-profile/company-profile.component';
import { QuillEditorComponent } from './view/quill/quill-editor/quill-editor.component';
import { AgencySettingComponent } from './view/admin/property-dashboard/agency/agency-setting/agency-setting.component';
import { EditPrivilegesComponent } from './view/admin/property-dashboard/agency/manage-staff/edit-privileges/edit-privileges.component';
import { ManageListingsComponent } from './view/profolio/Listings/manage-listings/manage-listings.component';
import { ContractsComponent } from './view/profolio/billing/contracts/contracts.component';
import { ProfolioHeaderComponent } from './layout/profolio-header/profolio-header.component';
import { JobPostComponent } from './view/admin/job-dashboard/job-post/job-post.component';
import { JobAdminHeaderComponent } from './layout/job-admin-header/job-admin-header.component';
import { JobDashboardComponent } from './view/admin/job-dashboard/job-dashboard/job-dashboard.component';
import { AutomobileDashboardComponent } from './view/admin/automobile-dashboard/automobile-dashboard/automobile-dashboard.component';
import { AutoMobAccountsComponent } from './view/admin/automobile-dashboard/super-admin/auto-mob-accounts/auto-mob-accounts.component';
import { AutoMobDashboardComponent } from './view/admin/automobile-dashboard/super-admin/auto-mob-dashboard/auto-mob-dashboard.component';
import { AutoMobListComponent } from './view/admin/automobile-dashboard/super-admin/auto-mob-list/auto-mob-list.component';
import { AddListAutoMobComponent } from './view/admin/automobile-dashboard/super-admin/auto-mob-list/add-list-auto-mob/add-list-auto-mob.component';
import { SaleResidentialForSaleComponent } from './view/properties/property/sale-tab/sale-residential-for-sale/sale-residential-for-sale.component';
import { SaleCommercialForSaleComponent } from './view/properties/property/sale-tab/sale-commercial-for-sale/sale-commercial-for-sale.component';
import { SaleLandForSaleComponent } from './view/properties/property/sale-tab/sale-land-for-sale/sale-land-for-sale.component';
import { SaleMultipleUnitsForSaleComponent } from './view/properties/property/sale-tab/sale-multiple-units-for-sale/sale-multiple-units-for-sale.component';
import { RentResidentialUnitForSaleComponent } from './view/properties/property/rent-tab/rent-residential-unit-for-sale/rent-residential-unit-for-sale.component';
import { RentCommercialForRentComponent } from './view/properties/property/rent-tab/rent-commercial-for-rent/rent-commercial-for-rent.component';
import { RentRoomsForRentComponent } from './view/properties/property/rent-tab/rent-rooms-for-rent/rent-rooms-for-rent.component';
import { RentShortTermDailyComponent } from './view/properties/property/rent-tab/rent-short-term-daily/rent-short-term-daily.component';
import { RentShortTermsMonthlyComponent } from './view/properties/property/rent-tab/rent-short-terms-monthly/rent-short-terms-monthly.component';
import { JobAdminLayoutComponent } from './view/admin/job-dashboard/job-admin-layout/job-admin-layout.component';
import { JobAccountComponent } from './view/admin/job-dashboard/job-account/job-account.component';
import { JobListadminComponent } from './view/admin/job-dashboard/job-listadmin/job-listadmin.component';
import { ProfolioAdminComponent } from './view/profolio/profolio-admin/profolio-admin.component';
import { PaymentMethodComponent } from './view/profolio/payment-method/payment-method.component';
import { JeeeHeaderComponent } from './layout/jeee-header/jeee-header.component';

const routes: Routes = [

  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'automobile-list', component: AutomobileListComponent },
  { path: 'automobile-list-view', component: AutomobileListViewComponent },
  { path: 'job-list', component: JobListComponent },
  { path: 'job-list-view', component: JobListViewComponent },
  { path: 'job-profile', component: JobProfileComponent },
  { path: 'job-account-setting', component: JobAccountSettingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addlist', component: AdminAddListComponent },
  { path: 'agency-registration', component: AgencyRegistrationComponent },
  { path: 'Perfomance-dashboard', component: PerformanceDashboardComponent },
  { path: 'Manage-staff', component: ManageStaffComponent },
  { path: 'addlist-manage-staff', component: ManageStaffAddListComponent },
  { path: 'manage-team', component: ManageTeamsComponent },
  { path: 'marketing-portals', component: MarketingPortalComponent },
  { path: 'watermark', component: WatermarkSettingComponent },
  { path: 'company-profile', component: CompanyProfileComponent },
  { path: 'quill', component: QuillEditorComponent },
  { path: 'agencysetting', component: AgencySettingComponent },
  { path: 'edit-privileges', component: EditPrivilegesComponent },
  { path: 'managelisting', component: ManageListingsComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'profolioheader', component:ProfolioHeaderComponent },
  { path: 'job-post', component:JobPostComponent },
  { path: 'job-header', component:JobAdminHeaderComponent },
  { path: 'job-dashboard', component:JobDashboardComponent },
  { path: 'profolio', component:ProfolioAdminComponent },
 

  {
    path: 'jeee',
    component: LayoutWithoutMenuComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'type', component: LayoutComponent,
        children: [
          {
            path: 'properties/:type',
            component: LandingPageComponent,
            children: [
              {
                path: 'property',
                component: PropertyComponent,
              },
              {
                path: 'property-list',
                component: PropertyListComponent,
              },
              {
                path: 'property-list-view', component: PropertyListViewComponent,
              },
              { path: '', redirectTo: 'property', pathMatch: 'full' },
              { path: '**', redirectTo: 'property', pathMatch: 'full' },
            ],
          },
          {
            path: 'jobs/:type',
            component: LandingPageComponent,
            children: [
              {
                path: 'job',
                component: JobComponent,
              },
              {
                path: 'job-list',
                component: JobListComponent,
              },
              {
                path: 'job-list-view',
                component: JobListViewComponent,
              },
              { path: '', redirectTo: 'job', pathMatch: 'full' },
              { path: '**', redirectTo: 'job', pathMatch: 'full' },
            ],
          },
          {
            path: 'automobiles/:type',
            component: LandingPageComponent,
            children: [
              {
                path: 'automobile',
                component: AutomobileComponent,
              },
              {
                path: 'automobile-list',
                component: AutomobileListComponent,
              },
              {
                path: 'automobile-list-view', component: AutomobileListViewComponent,
              },
              { path: '', redirectTo: 'automobile', pathMatch: 'full' },
              { path: '**', redirectTo: 'automobile', pathMatch: 'full' },
            ],
          },
          { path: '', redirectTo: 'properties/sale', pathMatch: 'full' },
          { path: '**', redirectTo: 'properties/sale', pathMatch: 'full' },
        ],
      },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]

  },
  {
    path: 'admin',
    component: BrokerpadLayoutComponent,
    children: [      
      { path: 'property', component: DashboardComponent }, 
      { path: 'editPrivilage', component: EditPrivilegesComponent }, 
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]

  },
  {
    path: 'automobile',
    component: AutomobileDashboardComponent,
    children: [
      { path: 'dashboard', component: AutoMobDashboardComponent },
      { path: 'account', component: AutoMobAccountsComponent },
      { path: 'list', component: AutoMobListComponent }, 
      // { path: 'addlist', component: AddListAutoMobComponent }, 
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]

  }, 
  {
    path: 'job',
    component: JobAdminLayoutComponent,
    children: [
      { path: 'dashboard', component: JobDashboardComponent },
      { path: 'account', component: JobAccountComponent },
      { path: 'list', component: JobListadminComponent }, 
      // { path: 'addlist', component: AddListAutoMobComponent }, 
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  }, 
  {
    path: 'profolio',
    component: ProfolioAdminComponent,
    children: [
      { path: 'dashboard', component: ContractsComponent },
      { path: 'managelist', component: ManageListingsComponent },
      { path: 'contract', component: ContractsComponent }, 
      { path: 'payment', component: PaymentMethodComponent }, 
      // { path: 'addlist', component: AddListAutoMobComponent }, 
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]

  }, 

  { path: '', redirectTo: 'jeee', pathMatch: 'full' },
  { path: '**', redirectTo: 'jeee', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
