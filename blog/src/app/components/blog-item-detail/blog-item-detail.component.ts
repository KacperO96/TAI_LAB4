import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

  @Input() text: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
