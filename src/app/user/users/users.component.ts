import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../store/state';
import { fetchData, fetchDataAccToPage } from '../store/action';
import { Observable, Subscription, of } from 'rxjs';
import { getPosts } from '../store/selector';
import { AuthService } from '../store/authservice';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild('paginator', { static: true }) paginator: Paginator;

  Users: any;
  // Users$: Observable<any>;

  // Users: any;
  currentPage: number = 1;
  defaultPage: number = 2;
  totalUsers: number;
  totalUsersInStore: number | undefined;

  private getPostsSubscription: Subscription;

  constructor(private store: Store<User>, private authService: AuthService) { }


  ngOnInit(): void {

    this.store.select(getPosts).subscribe(async data => {
      console.log(data)
      if (data == null) {
        
        this.store.dispatch(fetchData());

      }

    });

    this.getPostsSubscription = this.store.select(getPosts).subscribe(data => {
      console.log(data)
      this.Users = data
    });

    this.store.select(getPosts).subscribe(data => {
      // console.log(data?.length)
      this.totalUsersInStore = data?.length
    })

    this.authService.getTotalUser$.subscribe(totalUsers => {
      this.totalUsers = totalUsers;
    })

  }

  onPageChange(event: any) {

    this.getPostsSubscription.unsubscribe()

    // console.log(eve)
    const pagiNaData = {
      skip: event.first,
      limit: event.rows
    }

    console.log(this.totalUsersInStore)
    console.log(this.totalUsers)
    this.store.dispatch(fetchDataAccToPage(pagiNaData))

    this.store.select(getPosts).subscribe(data => {
      this.Users = data
      console.log(data)

    })


  }

}
