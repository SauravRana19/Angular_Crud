import { Component, OnInit } from '@angular/core';
import { movieData } from './data/moviedata';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartsComponent implements OnInit {
  constructor(private router: Router) {}

  dataSource = movieData.data;
  searchinput: string = '';
  back() {
    this.router.navigate(['']);
  }
  clear() {
    this.searchinput = '';
    this.dataSource = movieData.data;
  }
  cartdetails(value: any) {
    let id = value;
    console.log(id);
    this.router.navigate(['feature/detail', id]);
  }
  search() {
    console.log(this.searchinput);

    const data = movieData.data.filter((items: any) => {
      return JSON.stringify(items.Title)
        .toLocaleLowerCase()
        .includes(this.searchinput);
    });
    this.dataSource = data;
    // console.log("data",data)
  }
  
  ngOnInit(): void {
    console.log('data', movieData.data);
  }
}
