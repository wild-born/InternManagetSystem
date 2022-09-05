/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddDesignationDetailService } from './AddDesignationDetail.service';

describe('Service: AddDesignationDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddDesignationDetailService]
    });
  });

  it('should ...', inject([AddDesignationDetailService], (service: AddDesignationDetailService) => {
    expect(service).toBeTruthy();
  }));
});
