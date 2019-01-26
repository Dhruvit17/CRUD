import { TestBed } from '@angular/core/testing';

import { HeroService } from './connect.service';

describe('ConnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
