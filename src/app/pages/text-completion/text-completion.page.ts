import { Component, OnInit } from '@angular/core';
import { CompletionService } from 'src/app/services/chatgpt-completion.service';

@Component({
  selector: 'app-text-completion',
  templateUrl: './text-completion.page.html',
  styleUrls: ['./text-completion.page.scss'],
})
export class TextCompletionPage implements OnInit {
  context: string = '';
  prompt: string = '';
  loading: string = '';
  constructor(private completionService: CompletionService) {}

  ngOnInit() {}

  async ask() {
    this.loading = 'Loading...';
    this.completionService
      .getCompletion( this.context + '.' + this.prompt)
      .subscribe({
        next: (data: any) => {
          this.context = data.choices[0].text;
        },
        error: (error) => {
          console.error(error);
          this.loading = 'failed... check the console.';
        },
        complete: () => {
          console.log(this.context);
          this.loading = this.context;
        },
      });
  }
}
