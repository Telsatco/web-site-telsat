import { TestBed, inject } from '@angular/core/testing';

import { FooterInfoService } from './footer-info.service';

describe('FooterInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooterInfoService]
    });
  });

  it('should be created', inject([FooterInfoService], (service: FooterInfoService) => {
    expect(service).toBeTruthy();
  }));
});
