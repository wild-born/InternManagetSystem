/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddApplyLeaveService } from './AddApplyLeave.service';

describe('Service: AddApplyLeave', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddApplyLeaveService]
    });
  });

  it('should ...', inject([AddApplyLeaveService], (service: AddApplyLeaveService) => {
    expect(service).toBeTruthy();
  }));
});
