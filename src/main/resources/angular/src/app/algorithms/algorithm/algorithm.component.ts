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
    {name:'Bubble Sort',video:'https://www.youtube.com/embed/nmhjrI-aW5o',expl:`Bubble sort is an algorithm used to sort an array of elements. The algorithm repeatedly steps through
    the list, compares each pair of adjacent items and swaps them if the left one is bigger than the right. This way the
    algorithm guarantees that the biggest element always goes to the back.`,speed:`The average speed is O(N ^ 2) and the best case is O(N), when the elements are sorted. One of the main advantages of this algorithms
    over the other ones is that it has the ability to check if the list is sorted. This means that it always does the minimum amount of
    actions it has to in order to sort the array.`},
    {name:'Counting Sort',video:'https://www.youtube.com/embed/7zuGmKfUt7s',expl:`Counting sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct
     key values (kind of hashing). Then doing some arithmetic to calculate
     the position of each object in the output sequence.`,speed:'over 9000'},
    {name:'Selection Sort',video:'https://www.youtube.com/embed/xWBP4lzkoyM',expl:`Selection sort is an algorithm that repeatedly searches remaining items to find the
    least one and moves it to its final location.`,speed:'over 9000'},
    {name:'Insertion Sort',video:'https://www.youtube.com/embed/OGzPmgsI-pQ',expl:`Insertion sort is a sorting algorithm in which the elements are transferred one at a time to the right position.
     In other words, an insertion sort helps in building the final sorted list, one item at a time,
      with the movement of higher-ranked elements.`,speed:'over 9000'},
    {name:'Merge Sort',video:'https://www.youtube.com/embed/JSceec-wEyw',expl:`Merge sort is a divide and Conquer algorithm. It divides input array in two halves1,
     calls itself for the two halves and then merges the two sorted halves.`,speed:'over 9000'},
    {name:'Quick Sort',video:'https://www.youtube.com/embed/PgBzjlCcFvc',expl:`Quick sort is a popular sorting algorithm that is often faster in practice compared to other sorting algorithms.
    It utilizes a divide-and-conquer strategy to quickly sort data items by dividing a large
    array into two smaller arrays.`,speed:'over 9000'},
    {name:'Radix Sort',video:'https://www.youtube.com/embed/nu4gDuFabIM',expl:`Radix sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by
    the individual digits which share the same significant position and value.`,speed:'over 9000'},
    {name:'Heap Sort',video:'https://www.youtube.com/embed/MtQL_ll5KhQ',expl:`Heap sort is a sorting algorithm that works by first organizing the data to be sorted into a special type of binary tree called a heap. The heap
    itself has, by definition, the largest value at the top of the tree, so the heap sort
     algorithm must also reverse the order.`,speed:'over 9000'}
    {name: 'Comb Sort',video:'https://www.youtube.com/embed/n51GFZHXlYY',expl:`Comb sort is an in-place sort algorithm that repeatedly reorders different pairs of items. On each pass swap pairs of items separated
     by the increment or gap, if needed, and reduce the gap.`,speed: 'over 9000'}
  ]

  id;
  algorithm;

  constructor(private route: ActivatedRoute,private sanitizer: DomSanitizer) { }

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
