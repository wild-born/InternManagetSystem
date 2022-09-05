/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InternDetailService } from './InternDetail.service';

describe('Service: InternDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternDetailService]
    });
  });

  it('should ...', inject([InternDetailService], (service: InternDetailService) => {
    expect(service).toBeTruthy();
  }));
});
