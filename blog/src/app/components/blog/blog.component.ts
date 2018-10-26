import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items = [
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "Ala ma kota",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "Ala ma kota",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "Ala ma kota",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "Ala ma kota",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "Ala ma kota",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "Ala ma kota",
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
