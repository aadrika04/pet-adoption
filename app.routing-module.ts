import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
    
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cat-details',
    loadChildren: () => import('./cat-details/cat-details.module').then( m => m.CatDetailsPageModule)
  },
  {
    path: 'dog-details',
    loadChildren: () => import('./dog-details/dog-details.module').then( m => m.DogDetailsPageModule)
  },
  {
    path: 'rabbit-details',
    loadChildren: () => import('./rabbit-details/rabbit-details.module').then( m => m.RabbitDetailsPageModule)
  },
  {
    path: 'rocky',
    loadChildren: () => import('./adoptiondetails/rocky/rocky.module').then( m => m.RockyPageModule)
  },
  {
    path: 'fluffy',
    loadChildren: () => import('./fluffy/fluffy.module').then( m => m.FluffyPageModule)
  },
  {
    path: 'bella',
    loadChildren: () => import('./bella/bella.module').then( m => m.BellaPageModule)
  },
  {
    path: 'snowy',
    loadChildren: () => import('./snowy/snowy.module').then( m => m.SnowyPageModule)
  },
  {
    path: 'mittens',
    loadChildren: () => import('./mittens/mittens.module').then( m => m.MittensPageModule)
  },
  {
    path: 'whisker',
    loadChildren: () => import('./whisker/whisker.module').then( m => m.WhiskerPageModule)
  },
  {
    path: 'nibbles',
    loadChildren: () => import('./nibbles/nibbles.module').then( m => m.NibblesPageModule)
  },
  {
    path: 'pepper',
    loadChildren: () => import('./pepper/pepper.module').then( m => m.PepperPageModule)
  },
  {
    path: 'bunny',
    loadChildren: () => import('./bunny/bunny.module').then( m => m.BunnyPageModule)
  },
  {
    path: 'adoption-confirmation',
    loadChildren: () => import('./adoption-confirmation/adoption-confirmation.module').then( m => m.AdoptionConfirmationPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'pet-list',
    loadChildren: () => import('./pet-list/pet-list.module').then( m => m.PetListPageModule)
  },
  {
    path: 'birds',
    loadChildren: () => import('./birds/birds.module').then( m => m.BirdsPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
