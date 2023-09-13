import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieData } from '../../data/moviedata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartsdetails',
  templateUrl: './cartsdetails.component.html',
  styleUrls: ['./cartsdetails.component.scss'],
})
export class CartsdetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  id: number = null!;
  dataSource = movieData;
  data: any;

  back() {
    this.router.navigate(['feature/carts']);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });

    this.dataSource.data.map((items: any, index: number) => {
      if (items.id == this.id) {
        this.data = items;
      }
    });

  }
}
