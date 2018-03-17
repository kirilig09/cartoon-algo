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

    {name:'Counting Sort',video:'https://www.youtube.com/embed/7zuGmKfUt7s',expl:`Counting sort is an algorithm used to sort an array of elements. It is an integer sorting algorithm which
    means it uses arithmetic operations to achieve its goal. This sort literally counts how many times an element is present
    in the array. This means that it's not a comparison sort and its speed is never going to be O(NlogN). `,
    speed:`The algorithms speed is always O(N + K), where K is the biggest number in the array. It is often found in another
    sorting algorithm as a subroutine operaiton.`},

    {name:'Selection Sort',video:'https://www.youtube.com/embed/xWBP4lzkoyM',expl:`Selection Sort is an algorithm used to sort. It is an in-place comparison sort, making it inefficient
    on large lists, and it generally performs worse than the similar sorting algorithms. The algorithm divides the input list
    into two parts: the sublist of items already sorted, which is built up from left to right at the front of the list,
    and the sublist of items remaining to be sorted that occupy the rest of the list. The algorithm proceeds by finding the
    smallest element in the unsorted sublist, swapping it with the leftmost unsorted element.`,
    speed:`Its average speed is O(N ^ 2), means it's worse than insertion sort in most cases. Among simple average-case O(N ^ 2)
    algorithms, selection sort almost always outperforms bubble sort and counting sort. Insertion sort is very similar in that
    after the Kth iteration, the first K elements in the array are in sorted order.`},

    {name:'Insertion Sort',video:'https://www.youtube.com/embed/OGzPmgsI-pQ',expl:`Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one
    item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort
    or merge sort. Like most simpler sorts, it takes the minimum amount of steps to complete the sorting.
    Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it.
    At each array-position, it checks the value there against the largest value in the sorted list.
    If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within
    the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.`,
    speed:`The speed is adaptive, which means the time complexity is O(N * K), where each element is at most K places away from its
    sorted position. It is useful in lists with little amount of elements, but it could also be very helpful in arrays which are
    almost sorted`},

    {name: 'Comb Sort',video:'https://www.youtube.com/embed/n51GFZHXlYY',expl:`Comb sort is an in-place sort algorithm that repeatedly reorders different pairs of items. On each pass swap pairs of items separated
     by the increment or gap, if needed, and reduce the gap.`,speed: 'over 9000'}

    {name:'Quick Sort',video:'https://www.youtube.com/embed/PgBzjlCcFvc',expl:`Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm, one of the best,
    serving as a systematic method for sorting elements in an array. It is one of the most common used algorithm in the whole
    programming scene, especially in competitive programming. The first step it does is to pick a pivot. The second step uses
    the pivot to determine which elements to put in front of it or behind. Logically, the bigger elements are put in the back
    and the smaller ones are put in the front. Thus, the position of the pivot as an element in the starting array, is now its
    position in the sorted array.`,
    speed:`The speed of quick sort is usually O(N * logN), but in the worst case scenario is O(N ^ 2). Mind you, this is a really
    rare case, but in reality in its name is the word "quick", which leads to the concept of its really fast sorting ability.
    Quick sort was rated the overall fastest algorithm of its time of birth, but after some years, the title was taken over
    by radix sort.`},

    {name:'Radix Sort',video:'https://www.youtube.com/embed/nu4gDuFabIM',expl:`Radix sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys
    by the individual digits which share the same significant position and value. A positional notation is required, but
    because integers can represent strings of characters (e.g., names or dates) and specially formatted floating point numbers,
    radix sort is not limited to integers. If the biggest amount of digits or characters in an element is W, radix sort takes
    the digit in the W position or character and sorts the array only by it. Then it does the same for the digit in the W - 1
    place and so on, until the first digit, where the list becomes sorted.`,
    speed:`Its overall speed is O(W * N), where both worst and best is O(W * N). In some cases, where the digits are too much and the
    amount of numbers isn't so big, it is seen as that radix sort becomes worse than most high performance comparison based
    algorithms like quick sort, merge sort, heap sort, etc.`},

    {name:'Heap Sort',video:'https://www.youtube.com/embed/MtQL_ll5KhQ',expl:`Heap Sort is a sorting algorithm which uses a binary tree to complete its operations. Like the other
    O(N * logN) sorting algorithms it is comparison-based, in-place algorithm which means it mainly uses the swap operation.
    In the first step, a heap is built out of the data. The heap is often placed in an array with the layout of a complete
    binary tree. The complete binary tree maps the binary tree structure into the array indices. Each array index
    represents a node. The index of the nodes parent, left child branch, or right child branch are simple expressions.
    For a zero-based array, the root node is stored at index 0. In the second step, a sorted array is created by repeatedly
    removing the largest element from the heap (the root of the heap), and inserting it into the array. The heap is updated
    after each removal to maintain the heap property. Once all objects have been removed from the heap, the result is a sorted array.`,
    speed:`The speed is always O(N * logN), relating to merge sort and quick sort, because of how it always does a fixed amount of
    operations for any array, no matter the size of the elements. Heap sort compares really well to quick sort, because quick
    sort has a worst case of O(N ^ 2) which is unacceptable for large data sets and can be deliberately triggered given enough
    knowledge of the implementation, creating a security risk. Unlike merge sort, quick sort and heap sort aren't stable sorts.`}

    {name:'Merge Sort',video:'https://www.youtube.com/embed/JSceec-wEyw',expl:`Merge sort was the first sort of its kind to have a constant speed, despite any characteristic of the array.
    This was one of the first divide and conquer algorithms to rule the programming industry, because of its speed. The
    algorithms has 2 steps. First it divides the array into 2 subarrays, then it does the same step again and again, until there
    the array is divided into N arrays, each containing 1 element. In the second step the algorithm compares the first elements
    in each adjacent subarrays. The smaller element is put into an array that is 2 times bigger than the array the elements
    come from. This step is done untill an array of size N is made, which is the final, sorted array.`,
    speed:`The speed is always going to be O(N * logN), because it always does the same steps no matter the array it's sorting. The
    algorithm relates to quick sort, but in most cases it beats it by least operations needed.`},
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
