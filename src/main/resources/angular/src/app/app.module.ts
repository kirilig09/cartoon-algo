import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {Route, RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { AlgorithmComponent } from './algorithms/algorithm/algorithm.component';
import {HttpClientModule} from "@angular/common/http";
import { SolveComponent } from './solve/solve.component';
const routes:Route[] = [
  {path:'',component:HomePageComponent},
  {path:'algos',component:AlgorithmsComponent},
  {path:'algos/:id',component:AlgorithmComponent},
  {path:'algos/solve/:id',component:SolveComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AlgorithmsComponent,
    AlgorithmComponent,
    SolveComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      enableTracing:true
    }),
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
