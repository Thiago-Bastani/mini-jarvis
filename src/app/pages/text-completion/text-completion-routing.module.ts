import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextCompletionPage } from './text-completion.page';

const routes: Routes = [
  {
    path: '',
    component: TextCompletionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextCompletionPageRoutingModule {}
