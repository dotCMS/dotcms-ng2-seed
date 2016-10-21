import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Logger} from "angular2-logger/core";

import { AppComponent } from './app.component';

// Import all the services
import {
  AppConfig,
  FileSystemService,
  HttpClient,
  JWTAuthService,
  LocalStoreService,
  LoggerService,
  NotificationService,
  SettingsStorageService,
  SiteBrowserService,
  SiteBrowserState,
  SiteSelectorService,
  SiteTreetableService,
} from 'dotcms-js/dotcms-js';

// Import all modules
import {
  DotcmsBreadcrumbModule,
  DotcmsSiteDatatableModule,
  DotcmsSiteSelectorModule,
  DotcmsSiteTreeTableModule,
  DotcmsTreeableDetailModule,
} from 'dotcms-js/dotcms-js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    DotcmsBreadcrumbModule,
    DotcmsSiteDatatableModule,
    DotcmsSiteSelectorModule,
    DotcmsSiteTreeTableModule,
    DotcmsTreeableDetailModule,
  ],
  providers: [
    Logger,
    {provide: AppConfig, useClass: AppConfig},
    {provide: FileSystemService, useClass: FileSystemService},
    {provide: HttpClient, useClass: HttpClient},
    {provide: JWTAuthService, useClass: JWTAuthService},
    {provide: LocalStoreService, useClass: LocalStoreService},
    {provide: LoggerService, useClass: LoggerService},
    {provide: NotificationService, useClass: NotificationService},
    {provide: SettingsStorageService, useClass: SettingsStorageService},
    {provide: SiteBrowserService, useClass: SiteBrowserService},
    {provide: SiteBrowserState, useClass: SiteBrowserState},
    {provide: SiteSelectorService, useClass: SiteSelectorService},
    {provide: SiteTreetableService, useClass: SiteTreetableService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
