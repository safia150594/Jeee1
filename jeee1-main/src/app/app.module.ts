import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { PageNotFoundComponent } from './share/page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { PropertyComponent } from './view/properties/property/property.component';
import { LandingPageComponent } from './share/landing-page/landing-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SignInComponent } from './view/authentication/sign-in/sign-in.component';
import { SubHeaderComponent } from './layout/sub-header/sub-header.component';
import { PropertyListViewComponent } from './view/properties/property-list-view/property-list-view.component';
import { PropertyListComponent } from './view/properties/property-list/property-list.component';
import { LayoutWithoutMenuComponent } from './layout/layout-without-menu/layout-without-menu.component';
import { SignUpComponent } from './view/authentication/sign-up/sign-up.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AutomobileComponent } from './view/automobiles/automobile/automobile.component';
import { JobComponent } from './view/jobs/job/job.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InquireComponent } from './view/properties/property-list/inquire/inquire.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutomobileListViewComponent } from './view/automobiles/automobile-list-view/automobile-list-view.component';
import { AutomobileListComponent } from './view/automobiles/automobile-list/automobile-list.component';
import { JobListComponent } from './view/jobs/job-list/job-list.component';
import { JobListViewComponent } from './view/jobs/job-list-view/job-list-view.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { JobProfileComponent } from './view/jobs/job-profile/job-profile.component';
import { FormsModule } from '@angular/forms';
import { JobAccountSettingComponent } from './view/jobs/job-account-setting/job-account-setting.component';
import { DashboardComponent } from './view/admin/property-dashboard/dashboard.component';
import { BrokerpadHeaderComponent } from './layout/brokerpad-header/brokerpad-header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrokerpadLayoutSidebarComponent } from './layout/brokerpad-layout-sidebar/brokerpad-layout-sidebar.component';
import { BrokerpadLayoutComponent } from './layout/brokerpad-layout/brokerpad-layout.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AdminAddListComponent } from './view/admin/admin-add-list/admin-add-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AgencyRegistrationComponent } from './view/registration-form/agency-registration/agency-registration.component';
import { AddlistDescPhotoUploadComponent } from './view/admin/admin-add-list/PhotoUpload/addlist-desc-photo-upload/addlist-desc-photo-upload.component';
import { PerformanceDashboardComponent } from './view/admin/property-dashboard/performance-dashboard/performance-dashboard/performance-dashboard.component';
import { ManageStaffComponent } from './view/admin/property-dashboard/agency/manage-staff/manage-staff.component';
import { ManageTeamsComponent } from './view/admin/property-dashboard/agency/manage-teams/manage-teams.component';
import { MarketingPortalComponent } from './view/admin/property-dashboard/agency/marketing-portal/marketing-portal.component';
import { WatermarkSettingComponent } from './view/admin/property-dashboard/agency/watermark-setting/watermark-setting.component';
import { CompanyProfileComponent } from './view/admin/property-dashboard/agency/company-profile/company-profile.component';
import { AgencySettingComponent } from './view/admin/property-dashboard/agency/agency-setting/agency-setting.component';
import { ManageStaffAddListComponent } from './view/admin/property-dashboard/agency/manage-staff/manage-staff-add-list/manage-staff-add-list.component';
import { QuillEditorComponent } from './view/quill/quill-editor/quill-editor.component';
import { QuillModule } from 'ngx-quill';
import { RentComponent } from './view/admin/property-dashboard/rent/rent.component';
import { SalesComponent } from './view/admin/property-dashboard/sales/sales/sales.component';
import { EditPrivilegesComponent } from './view/admin/property-dashboard/agency/manage-staff/edit-privileges/edit-privileges.component';
import { ManageListingsComponent } from './view/profolio/Listings/manage-listings/manage-listings.component';
import { ContractsComponent } from './view/profolio/billing/contracts/contracts.component';
import { ProfolioHeaderComponent } from './layout/profolio-header/profolio-header.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { JobDashboardComponent } from './view/admin/job-dashboard/job-dashboard/job-dashboard.component';
import { JobPostComponent } from './view/admin/job-dashboard/job-post/job-post.component';
import { JobAdminHeaderComponent } from './layout/job-admin-header/job-admin-header.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { SidebarModule } from 'ng-sidebar';
import { AutomobileDashboardComponent } from './view/admin/automobile-dashboard/automobile-dashboard/automobile-dashboard.component';
import { AutoMobDashboardComponent } from './view/admin/automobile-dashboard/super-admin/auto-mob-dashboard/auto-mob-dashboard.component';
import { AutoMobAccountsComponent } from './view/admin/automobile-dashboard/super-admin/auto-mob-accounts/auto-mob-accounts.component';
import { AutoMobListComponent } from './view/admin/automobile-dashboard/super-admin/auto-mob-list/auto-mob-list.component';
import { AutoMobHeaderComponent } from './layout/auto-mob-header/auto-mob-header/auto-mob-header.component';
import { AddListAutoMobComponent } from './view/admin/automobile-dashboard/super-admin/auto-mob-list/add-list-auto-mob/add-list-auto-mob.component';
import { QuickSearchPropertyComponent } from './view/admin/property-dashboard/quick-search-property/quick-search-property.component';
import { StatisticsListingComponent } from './view/admin/property-dashboard/performance-dashboard/statistics-listing/statistics-listing.component';
import { ChartsModule } from 'ng2-charts';
import { ImpresionClickComponent } from './view/admin/property-dashboard/performance-dashboard/statictic-impresion-click/impresion-click.component';
import { CTRandLCRComponent } from './view/admin/property-dashboard/performance-dashboard/statistics-ctrandlcr/ctrand-lcr.component';
import { LeadsComponent } from './view/admin/property-dashboard/performance-dashboard/statistics-leads/leads.component';
import { PropertyDashboardListingTableComponent } from './view/admin/property-dashboard/performance-dashboard/property-dashboard-listing-table/property-dashboard-listing-table.component';
import { MyProfileComponent } from './view/jobs/job-profile/my-profile/my-profile.component';
import { MyAdsComponent } from './view/jobs/job-profile/my-ads/my-ads.component';
import { MyFavouritesComponent } from './view/jobs/job-profile/my-favourites/my-favourites.component';
import { MySearchComponent } from './view/jobs/job-profile/my-search/my-search.component';
import { SaleResidentialForSaleComponent } from './view/properties/property/sale-tab/sale-residential-for-sale/sale-residential-for-sale.component';
import { SaleCommercialForSaleComponent } from './view/properties/property/sale-tab/sale-commercial-for-sale/sale-commercial-for-sale.component';
import { SaleLandForSaleComponent } from './view/properties/property/sale-tab/sale-land-for-sale/sale-land-for-sale.component';
import { SaleMultipleUnitsForSaleComponent } from './view/properties/property/sale-tab/sale-multiple-units-for-sale/sale-multiple-units-for-sale.component';
import { RentResidentialUnitForSaleComponent } from './view/properties/property/rent-tab/rent-residential-unit-for-sale/rent-residential-unit-for-sale.component';
import { RentCommercialForRentComponent } from './view/properties/property/rent-tab/rent-commercial-for-rent/rent-commercial-for-rent.component';
import { RentRoomsForRentComponent } from './view/properties/property/rent-tab/rent-rooms-for-rent/rent-rooms-for-rent.component';
import { RentShortTermsMonthlyComponent } from './view/properties/property/rent-tab/rent-short-terms-monthly/rent-short-terms-monthly.component';
import { RentShortTermDailyComponent } from './view/properties/property/rent-tab/rent-short-term-daily/rent-short-term-daily.component';
import { JobAdminLayoutComponent } from './view/admin/job-dashboard/job-admin-layout/job-admin-layout.component';
import { JobAccountComponent } from './view/admin/job-dashboard/job-account/job-account.component';
import { JobListadminComponent } from './view/admin/job-dashboard/job-listadmin/job-listadmin.component';
import { ProfolioAdminComponent } from './view/profolio/profolio-admin/profolio-admin.component';
import { PaymentMethodComponent } from './view/profolio/payment-method/payment-method.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ProfolioListingTableComponent } from './view/profolio/profolio-listing-table/profolio-listing-table.component';
import { JeeeHeaderComponent } from './layout/jeee-header/jeee-header.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FeaturesComponent } from './view/admin/admin-add-list/features/features.component';
import { ExtraInfoPopComponent } from './view/admin/admin-add-list/extra-info-pop/extra-info-pop.component';
import { PortalsPopComponent } from './view/admin/admin-add-list/portals-pop/portals-pop.component';
import { VideosPopComponent } from './view/admin/admin-add-list/videos-pop/videos-pop.component';
import { FloorPlansPopComponent } from './view/admin/admin-add-list/floor-plans-pop/floor-plans-pop.component';
import { DocumentPopComponent } from './view/admin/admin-add-list/document-pop/document-pop.component';
import { LandlordAddContactComponent } from './view/admin/admin-add-list/landlord-add-contact/landlord-add-contact.component';
import { ChequComponent } from './view/admin/admin-add-list/chequ/chequ.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LayoutComponent,
    PropertyComponent,
    LandingPageComponent,
    PropertyListComponent,
    PropertyListViewComponent,
    SignInComponent,
    SubHeaderComponent,
    LayoutWithoutMenuComponent,
    SignUpComponent,
    AutomobileComponent,
    JobComponent,
    InquireComponent,
    AutomobileListViewComponent,
    AutomobileListComponent,
    JobListComponent,
    JobListViewComponent,
    JobProfileComponent,
    JobAccountSettingComponent,
    BrokerpadHeaderComponent,
    DashboardComponent,
    BrokerpadLayoutSidebarComponent,
    BrokerpadLayoutComponent,
    AdminAddListComponent,
    AgencyRegistrationComponent,
    AddlistDescPhotoUploadComponent,
    PerformanceDashboardComponent,
    ManageStaffComponent,
    ManageTeamsComponent,
    MarketingPortalComponent,
    WatermarkSettingComponent,
    CompanyProfileComponent,
    AgencySettingComponent,
    ManageStaffAddListComponent,
    QuillEditorComponent,
    RentComponent,
    SalesComponent,
    EditPrivilegesComponent,
    ManageListingsComponent,
    ContractsComponent,
    ProfolioHeaderComponent,
    JobDashboardComponent,
    JobPostComponent,
    JobAdminHeaderComponent,
    AutomobileDashboardComponent,
    AutoMobDashboardComponent,
    AutoMobAccountsComponent,
    AutoMobListComponent,
    AutoMobHeaderComponent,
    AddListAutoMobComponent,
    QuickSearchPropertyComponent,
    StatisticsListingComponent,
    ImpresionClickComponent,
    CTRandLCRComponent,
    LeadsComponent,
    PropertyDashboardListingTableComponent,
    MyProfileComponent,
    MyAdsComponent,
    MyFavouritesComponent,
    MySearchComponent,
    SaleResidentialForSaleComponent,
    SaleCommercialForSaleComponent,
    SaleLandForSaleComponent,
    SaleMultipleUnitsForSaleComponent,
    RentResidentialUnitForSaleComponent,
    RentCommercialForRentComponent,
    RentRoomsForRentComponent,
    RentShortTermsMonthlyComponent,
    RentShortTermDailyComponent,
    JobAdminLayoutComponent,
    JobAccountComponent,
    JobListadminComponent,
    ProfolioAdminComponent,
    PaymentMethodComponent,
    ProfolioListingTableComponent,
    JeeeHeaderComponent,
    FeaturesComponent,
    ExtraInfoPopComponent,
    PortalsPopComponent,
    VideosPopComponent,
    FloorPlansPopComponent,
    DocumentPopComponent,
    LandlordAddContactComponent,
    ChequComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    ChartsModule,
    NgxSliderModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(), ModalModule.forRoot(),SidebarModule.forRoot(),
    TypeaheadModule.forRoot(), BrowserAnimationsModule, PaginationModule.forRoot(), BsDropdownModule.forRoot(), ProgressbarModule.forRoot(), BsDatepickerModule.forRoot(),
    QuillModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
