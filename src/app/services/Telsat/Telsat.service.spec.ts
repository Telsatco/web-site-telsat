import { TestBed, inject } from '@angular/core/testing';

import { ServicesTelsat } from './Telsat.service';

describe('ServicesTelsat', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesTelsat]
    });
  });

  it('should be created', inject([ServicesTelsat], (service: ServicesTelsat) => {
    expect(service).toBeTruthy();
  }));
});
