import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements AfterViewInit{

  //TODO: add http
/*
  algos = [
    {name:'Bubble Sort',img:'/assets/bubblesort.jpg'},
    {name:'Counting Sort',img:'/assets/countingsort.jpg'},
    {name:'Selection Sort',img:'/assets/selectionsort.jpg'},
    {name:'Insertion Sort',img:'/assets/insertionsort.jpg'},
    {name:'Merge Sort',img:'/assets/mergesort.jpg'},
    {name:'Quick Sort',img:'/assets/quicksort.jpg'},
    {name:'Radix Sort',img:'/assets/radixsort.jpg'},
    {name:'Heap Sort',img:'/assets/heapsort.jpg'}
  ]
*/
  algos:any;
  constructor(private http:HttpClient) { }
  ngAfterViewInit(): void {
    this.http.get(`/api/algos?page=0&size=6`).subscribe((data:any)=>{
      console.log(data);
      this.algos=data.content;
    })
  }



  changePage(page){
    this.http.get(`/api/algos?page=${page}&size=6`).subscribe((data:any)=>{
      console.log(data);
      this.algos=data.content;
    })
  }

}
