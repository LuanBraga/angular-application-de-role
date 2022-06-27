import { TestBed } from '@angular/core/testing';

import { InjectableDiService } from './injectable-di.service';

describe('InjectableDiService', () => {
  let service: InjectableDiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectableDiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
