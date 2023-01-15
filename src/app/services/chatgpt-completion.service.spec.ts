import { TestBed } from '@angular/core/testing';

import { CompletionService } from './chatgpt-completion.service';

describe('CompletionService', () => {
  let service: CompletionService
;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletionService
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
