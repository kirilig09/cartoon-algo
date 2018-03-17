import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  algos = [
    {name:'Bubble Sort',img:'/assets/bubblesort.jpg'},
    {name:'Counting Sort',img:'/assets/countingsort.jpg'},
    {name:'Selection Sort',img:'/assets/selectionsort.jpg'},
    {name:'Insertion Sort',img:'/assets/insertionsort.jpg'},
    {name:'Merge Sort',img:'/assets/mergesort.jpg'},
    {name:'Quick Sort',img:'/assets/quicksort.jpg'},
    {name:'Radix Sort',img:'/assets/radixsort.jpg'},
    {name:'Heap Sort',img:'/assets/heapsort.jpg'}
    {name:'Comb Sort',img:'/assets/combsort.jpg'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
