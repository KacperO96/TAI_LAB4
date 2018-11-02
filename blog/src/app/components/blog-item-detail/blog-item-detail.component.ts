import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

  text: string;
  image: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentText.subscribe(text => this.text = text);
    this.data.currentImage.subscribe(image => this.image = image);
  }

}
