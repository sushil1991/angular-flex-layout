import { Component, OnInit } from '@angular/core';
import { HomeService } from './_services/home.service';

const randomImgUrl = 'https://picsum.photos/536/354';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:any;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.cards = this.homeService.getCards()
  }

}
