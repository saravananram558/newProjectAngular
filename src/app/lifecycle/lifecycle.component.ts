import { Component,OnInit, OnChanges, SimpleChanges, AfterViewInit, AfterContentChecked,AfterContentInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges, AfterViewInit, AfterContentChecked, AfterContentInit, OnDestroy {

  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngAfterContentInit");
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngOnDestroy");
  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngAfterViewInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngOnChanges");
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('inside ngOnInit'); 
  }
}
