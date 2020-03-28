import { TestBed } from '@angular/core/testing';

import { TitleNameService } from './title-name.service';

describe('TitleNameService', () => {
  let service: TitleNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
