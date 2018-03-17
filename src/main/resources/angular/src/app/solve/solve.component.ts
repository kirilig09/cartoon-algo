import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit,OnDestroy {
  private sub: any;


  id;

  @ViewChild('lang')
  lang;

  @ViewChild('code')
  code;

  constructor(private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
      this.id = +params['id']; // (+) converts string 'id' to a number
    })
  }

  send(){
    this.http.put(`/api/judge/${this.id}`,{code:this.code.nativeElement.value,lang:this.lang.nativeElement.value})
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
