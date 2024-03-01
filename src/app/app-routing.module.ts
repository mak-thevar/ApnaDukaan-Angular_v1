import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './components/views/post/post.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProductlistComponent } from './components/views/productlist/productlist.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'products',
    component: ProductlistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
