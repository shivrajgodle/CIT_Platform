import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ClientMasterComponent } from './client-master/client-master.component';
import { MyWorkspaceComponent } from './my-workspace/my-workspace.component';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule } from '@angular/flex-layout';
import {TableModule} from 'primeng/table';


@NgModule({


  declarations: [
    AppComponent,
    HomepageComponent,
    ClientMasterComponent,
    MyWorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    MenubarModule,
    ToolbarModule,
    FileUploadModule,
    HttpClientModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    FlexLayoutModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
