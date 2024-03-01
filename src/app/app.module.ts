import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/views/post/post.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProductlistComponent } from './components/views/productlist/productlist.component';
import { FilterproductComponent } from './components/shared/filterproduct/filterproduct.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    HomeComponent,
    ProductlistComponent,
    FilterproductComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
