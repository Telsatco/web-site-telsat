import { TestBed, inject } from '@angular/core/testing';

import { MisionVisionService } from './mision-vision.service';

describe('MisionVisionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MisionVisionService]
    });
  });

  it('should be created', inject([MisionVisionService], (service: MisionVisionService) => {
    expect(service).toBeTruthy();
  }));
});
