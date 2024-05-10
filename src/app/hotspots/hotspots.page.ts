import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotspots',
  templateUrl: './hotspots.page.html',
  styleUrls: ['./hotspots.page.scss'],
})
export class HotspotsPage implements OnInit {
  menuItem = [
    {
      img: 'assets/yyy@1 1.png',
      dis: 'Burger',
      rate: '14',
    },
    {
      img: 'assets/yuyuyyuy@1 1.png',
      dis: 'Mega Pizza',
      rate: '18',
    },
    {
      img: 'assets/pngwing 3.png',
      dis: 'Wings',
      rate: '10',
    },
    {
      img: 'assets/cccc@2x 1.png',
      dis: 'Cake',
      rate: '10',
    },
    {
      img: 'assets/wqasd@2x 1.png',
      dis: 'Egg Noodles',
      rate: '12',
    },
    {
      img: 'assets/qqq@1 1.png',
      dis: 'Ice-cream',
      rate: '6',
    },
    {
      img: 'assets/yyy@1 1.png',
      dis: 'Double Burger',
      rate: '20.99',
    },
    {
      img: 'assets/yuyuyyuy@1 1.png',
      dis: 'Mega Pizza',
      rate: '18',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
