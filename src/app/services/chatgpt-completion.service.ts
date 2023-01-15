import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apikey } from '../environment/apikey';

@Injectable({
  providedIn: 'root',
})
export class CompletionService {
  apiKey = new Apikey();
  model = 'text-davinci-002';
  temperature = 0.7;
  url = 'https://api.openai.com/v1/completions';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey.key}`,
    }),
  };

  constructor(private http: HttpClient) {}

  body = {
    prompt: '',
    model: this.model,
    temperature: this.temperature,
    max_tokens: 700,
  };

  getCompletion(prompt: string) {
    this.body.prompt = prompt
    return this.http.post(this.url, this.body, this.httpOptions)
  }
}
