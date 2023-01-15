import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextCompletionPageRoutingModule } from './text-completion-routing.module';

import { TextCompletionPage } from './text-completion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextCompletionPageRoutingModule
  ],
  declarations: [TextCompletionPage]
})
export class TextCompletionPageModule {}
