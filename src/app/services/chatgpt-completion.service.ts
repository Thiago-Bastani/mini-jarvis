import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CompletionService {
  apiKey!: string;
  max_tokens!: number;
  temperature!: number;
  httpOptions: any;
  body: any;
  url = 'https://api.openai.com/v1/completions';

  constructor(private http: HttpClient) {}

  getCompletion(prompt: string) {
    this.apiKey = localStorage['apikey'];
    this.temperature = parseInt(localStorage['temperature']);
    this.max_tokens = parseInt(localStorage['max_tokens']);

    this.body = {
      prompt: '',
      temperature: this.temperature,
      max_tokens: this.max_tokens,
      model: 'text-davinci-003',
    };

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      }),
    };

    this.body.prompt = prompt;
    return this.http.post(this.url, this.body, this.httpOptions);
  }
}
