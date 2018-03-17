import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})
export class AlgorithmComponent implements OnInit,OnDestroy {

  private sub: any;

















  id;
  algorithm:any;
  sanitizer:DomSanitizer;
  constructor(private route: ActivatedRoute, sanitizer: DomSanitizer,private http:HttpClient) { //TODO: add http for algorithm
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.http.get(`/api/algos/${this.id}`).subscribe((data:any)=>{
      this.algorithm = data;
    })
    // this.algorithm = this.algos[this.id];
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
