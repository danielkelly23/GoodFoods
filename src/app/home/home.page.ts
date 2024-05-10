import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  itemMenu = [
    { img: 'assets/burger 1.png', dis: 'Burgers' },
    { img: 'assets/pizza 1.png', dis: 'Pizza' },
    { img: 'assets/meat_ 1.png', dis: 'Meats' },
    { img: 'assets/ice cream 1.png', dis: 'Desserts' },
  ];

  itemoffer = [
    {
      img: 'assets/view-3d-burger-meal-with-french-fries 1.png',
      titl: 'Good Foods(Best Offer)',
      dis: ' Delivery . 15-30 min',
      str: '10/10',
    },
    {
      img: 'assets/delicious-pizza-indoors 1.png',
      titl: 'Pizza Meal',
      dis: ' Delivery . 15-30 min',
      offr: 'Buy 1 Get 1 Free',
      str: '10/10',
    },
  ];

  menuItem = [
    {
      img: 'assets/yyy@1 1.png',
      dis: 'Burger Meal',
      rate: '20',
    },
    {
      img: 'assets/yuyuyyuy@1 1.png',
      dis: 'Mega Pizza',
      rate: '18',
    },
  ];
  constructor(private menucontroller: MenuController, private router: Router) {}

 

  openhotsports() {
    this.router.navigateByUrl('/hotspots');
  }
}
