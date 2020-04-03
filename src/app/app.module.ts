import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatButtonModule, MatToolbarModule, MatRadioButton,MatRadioModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { DynamicMaterialTableComponent } from './material-table/dynamic-material-table.component';
import { StaticMaterialTableComponent } from './static-material-table/static-material-table.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'static'
}, {
  path: 'static',
  component: StaticMaterialTableComponent,
}, {
  path: 'dynamic',
  component: DynamicMaterialTableComponent,
}];

@NgModule({
  declarations: [
    AppComponent,
    DynamicMaterialTableComponent,
    StaticMaterialTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
