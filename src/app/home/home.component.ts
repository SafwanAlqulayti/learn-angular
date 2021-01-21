import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
products = [];
/*
To make it clear for the destroy wither its true or false 
it depend on the subject return type withe its string or number
*/
destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this._dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      console.log(res,);
      this.products = res.body;
    })  
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  public firstPage() {
    this.products = [];
    this._dataService.sendGetRequestToUrl(this._dataService.first).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.products = res.body;
    })
  }
  public previousPage() {

    if (this._dataService.prev !== undefined && this._dataService.prev !== '') {
      this.products = [];
      this._dataService.sendGetRequestToUrl(this._dataService.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }

  }
  public nextPage() {
    if (this._dataService.next !== undefined && this._dataService.next !== '') {
      this.products = [];
      this._dataService.sendGetRequestToUrl(this._dataService.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }
  }
  public lastPage() {
    this.products = [];
    this._dataService.sendGetRequestToUrl(this._dataService.last).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.products = res.body;
    })
  }
}
