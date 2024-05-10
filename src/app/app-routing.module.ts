import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  
  
  {
    path: 'welcome',
    loadChildren: () =>
      import('./screens/welcome/welcome.module').then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: 'sigin',
    loadChildren: () =>
      import('./screens/sigin/sigin.module').then((m) => m.SiginPageModule),
  },
  {
    path: 'sigup',
    loadChildren: () =>
      import('./screens/sigup/sigup.module').then((m) => m.SigupPageModule),
  },
  
 
  
  
   
  {
    path: 'checkout',
    loadChildren: () =>
      import('./screens/checkout/checkout.module').then(
        (m) => m.CheckoutPageModule
      ),
  },
  
  
  {
    path: 'hotspots',
    loadChildren: () =>
      import('./hotspots/hotspots.module').then((m) => m.HotspotsPageModule),
  },
  {
    path: 'featured',
    loadChildren: () =>
      import('./featured/featured.module').then((m) => m.FeaturedPageModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./favorites/favorites.module').then((m) => m.FavoritesPageModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
