import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Header } from './component/header/header';
import { PageTableMult } from './page-table-mult/page-table-mult';
import { Footer } from './component/footer/footer';
import { TableMultiplication } from './component/table-multiplication/table-multiplication';
import { PageTables } from './page-tables/page-tables';
import { TablesMultiplications } from './component/tables-multiplications/tables-multiplications';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    App,
    Header,
    PageTableMult,
    Footer,
    TableMultiplication,
    PageTables,
    TablesMultiplications,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
