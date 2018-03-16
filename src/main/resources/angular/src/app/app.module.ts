import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {Route, RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { AlgorithmComponent } from './algorithms/algorithm/algorithm.component';

const routes:Route[] = [
  {path:'',component:HomePageComponent},
  {path:'algos',component:AlgorithmsComponent},
  {path:'algos/:id',component:AlgorithmComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AlgorithmsComponent,
    AlgorithmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      enableTracing:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
