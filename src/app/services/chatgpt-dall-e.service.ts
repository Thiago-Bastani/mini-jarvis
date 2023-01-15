import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apikey } from '../environment/apikey';

@Injectable({
  providedIn: 'root',
})
export class ChatgptDallEService {
  prompt = 'What is the capital of France?';
  endpoint = 'https://api.openai.com/v1/engines/dall-e/completions';

  constructor(
    private http: HttpClient,
    private apikey: Apikey,
    private httpOptions: any
  ) {
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apikey.key}`,
      }),
    };
  }

  getAnswer() {
    this.http
      .post(
        this.endpoint,
        {
          prompt: prompt,
          temperature: 0.7,
          max_tokens: 100,
        },
        this.httpOptions
      )
      .subscribe({
        next: (response: any) => {
          console.log(response.choices[0].text);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
