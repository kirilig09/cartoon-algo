import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})
export class AlgorithmComponent implements OnInit,OnDestroy {

  private sub: any;

  algos = [
    {name:'Bubble Sort',video:'https://www.youtube.com/embed/nmhjrI-aW5o',expl:'INSERT EXPLANATION HERE',speed:'over 9000'},
    {name:'Counting Sort',video:'https://www.youtube.com/embed/7zuGmKfUt7s',expl:'INSERT EXPLANATION HERE',speed:'over 9000'},
    {name:'Selection Sort',video:'https://www.youtube.com/embed/xWBP4lzkoyM',expl:'INSERT EXPLANATION HERE',speed:'over 9000'},
    {name:'Insertion Sort',video:'https://www.youtube.com/embed/OGzPmgsI-pQ',expl:'INSERT EXPLANATION HERE',speed:'over 9000'},
    {name:'Merge Sort',video:'https://www.youtube.com/embed/JSceec-wEyw',expl:'INSERT EXPLANATION HERE',speed:'over 9000'},
    {name:'Quick Sort',video:'https://www.youtube.com/embed/PgBzjlCcFvc',expl:'INSERT EXPLANATION HERE',speed:'over 9000'},
    {name:'Radix Sort',video:'https://www.youtube.com/embed/nu4gDuFabIM',expl:'INSERT EXPLANATION HERE',speed:'over 9000'},
    {name:'Heap Sort',video:'https://www.youtube.com/embed/MtQL_ll5KhQ',expl:'INSERT EXPLANATION HERE',speed:'over 9000'}
  ]

  id;
  algorithm;
  sanitizer:DomSanitizer;
  constructor(private route: ActivatedRoute, sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.algorithm = this.algos[this.id];
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
