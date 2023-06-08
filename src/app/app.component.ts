import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { DataState } from './user/store/state';
import { getLoadingState } from './user/store/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'tailwind';


  Loading$: Observable<boolean> | null; // Add the $ sign to indicate it's an observable
  blockedPanel: boolean ;

  constructor(private store: Store<DataState>, private cdr: ChangeDetectorRef) {
    console.log('app com')
  }

  ngOnInit(): void {

    setTimeout(() => {

      this.Loading$ = this.store.select(getLoadingState);

      this.Loading$.subscribe(data => {
        console.log(data);
        this.blockedPanel = data
      });
    }, 0)

  }

  ngOnChanges() {

    // this.Loading$ = this.store.select(getLoadingState); // Assign the observable here
    // this.Loading$
  }

  ngAfterContentInit(): void {

    // this.Loading$ = this.store.select(getLoadingState); // Assign the observable here

    // this.Loading$.subscribe(data => {
    //   console.log(data);
    //   this.blockedPanel = data
    //   this.cdr.detectChanges();

    // });

  }


}
