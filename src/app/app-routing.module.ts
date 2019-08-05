import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SaveInvoiceComponent } from './save-invoice/save-invoice.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'saveinvoice', component: SaveInvoiceComponent},
  {path: 'deleteitem', component: DeleteItemComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'modal', component: ConfirmModalComponent},
    {path: '**', component: PagenotfoundComponent}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
