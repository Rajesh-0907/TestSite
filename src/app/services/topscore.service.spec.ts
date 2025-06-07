import { TestBed } from '@angular/core/testing';

import { TopscoreService } from './topscore.service';

describe('TopscoreService', () => {
  let service: TopscoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopscoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
