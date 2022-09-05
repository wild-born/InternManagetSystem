/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DesignationDetailService } from './DesignationDetail.service';

describe('Service: DesignationDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesignationDetailService]
    });
  });

  it('should ...', inject([DesignationDetailService], (service: DesignationDetailService) => {
    expect(service).toBeTruthy();
  }));
});
