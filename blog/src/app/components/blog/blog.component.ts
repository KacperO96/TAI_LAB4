import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items = [
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "1Ala ma kotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "2Ala ma kotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "3Ala ma kotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "4Ala ma kotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "5Ala ma kotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "6Ala ma kotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "7Ala ma kotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "8Ala ma kotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "9Ala ma kotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
    {
      image: "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg",
      text: "10Ala ma kotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
  ];

  constructor(private data: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  newValues(text, image, id) {
    this.data.changeImage(image);
    this.data.changeText(text);
    this.router.navigate(['/blog/detail/',id]);
  }

}
