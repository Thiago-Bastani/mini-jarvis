import { TestBed } from '@angular/core/testing';

import { ChatgptDallEService } from './chatgpt-dall-e.service';

describe('ChatgptDallEService', () => {
  let service: ChatgptDallEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatgptDallEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
