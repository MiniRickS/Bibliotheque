import { TestBed } from '@angular/core/testing';

import { LivreService } from './livres.service';

describe('LivresService', () => {
  let service: LivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
