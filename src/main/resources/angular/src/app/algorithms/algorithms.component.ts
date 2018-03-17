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
    {name:'Comb Sort',img:'/assets/combsort.jpg'},
    {name:'Merge Sort',img:'/assets/mergesort.jpg'},
    {name:'Quick Sort',img:'/assets/quicksort.jpg'},
    {name:'Heap Sort',img:'/assets/heapsort.jpg'},
<<<<<<< HEAD
    {name:'Radix Sort',img:'/assets/radixsort.jpg'},
=======
    {name:'Radix Sort',img:'/assets/radixsort.jpg'},
    {name:'Breadth First Search',img:'/assets/breadth-firstsearch.png'},
    {name:'Depth First Search',img:'/assets/depth-firstsearch.png'},
    {name:'Dijkstra Shortest Path',img:'assets/dijkstra-shortestpath.jpg'}
>>>>>>> f06991fdbfdbd5dedda1e017949dd66ee9ccb592
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
