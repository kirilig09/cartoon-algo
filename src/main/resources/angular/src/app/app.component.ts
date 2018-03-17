import {Component, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.http.get('/user').subscribe(data=>{
      this.loggedIn=true;
    })
  }

  title = 'app';
  constructor(private http:HttpClient){
    /*router.events.subscribe(change=>{
      if(this.cookieService.get('XSRF_TOKEN')){
        this.loggedIn=true;
      }
    })*/
  }

  loggedIn = false;

  /*login(){
    this.http.get('/user').subscribe(data=>{
      console.log('success')
    })
  }*/


  logout(){
    this.http.get('/logout').subscribe(data=>{
      console.log(data)
    })
    this.loggedIn=false;

  }

}
