import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'blog-archive-item',
  templateUrl: './blog-archive-item.component.html',
  styleUrls: ['./blog-archive-item.component.css']
})
export class BlogArchiveItemComponent implements OnInit {

  year : number;
  month: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this .route.paramMap.subscribe(params =>{
      console.log(params);
      this.year = +params.get('year');
      this.month = + params.get('month')
    });
  }

  viewAll(){
    this.router.navigate(['/']);
  }

}
