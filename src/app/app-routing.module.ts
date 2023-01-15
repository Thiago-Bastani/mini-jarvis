import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',  
    loadChildren: () => import('./pages/text-completion/text-completion.module').then( m => m.TextCompletionPageModule)
  },
  {
    path: 'text-completion',
    loadChildren: () => import('./pages/text-completion/text-completion.module').then( m => m.TextCompletionPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./pages/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
