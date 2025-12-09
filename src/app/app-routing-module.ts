import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTableMult } from './page-table-mult/page-table-mult';
import { PageTables } from './page-tables/page-tables';

const routes: Routes = [
  {path: 'table-multiplication', component: PageTableMult},
  {path: 'tables-multiplications', component: PageTables}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
