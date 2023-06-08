import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [

    {
      image: "https://image.pngaaa.com/137/619137-small.png",
      name: "card-name",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio itaque"
    },

    {
      image: "https://image.pngaaa.com/137/619137-small.png",
      name: "card-name",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio itaque"
    },

    {
      image: "https://image.pngaaa.com/137/619137-small.png",
      name: "card-name",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio itaque"
    },

    {
      image: "https://image.pngaaa.com/137/619137-small.png",
      name: "card-name",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio itaque"
    }

  ]

}
