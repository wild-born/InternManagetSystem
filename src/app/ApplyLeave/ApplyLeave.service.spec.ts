/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApplyLeaveService } from './ApplyLeave.service';

describe('Service: ApplyLeave', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplyLeaveService]
    });
  });

  it('should ...', inject([ApplyLeaveService], (service: ApplyLeaveService) => {
    expect(service).toBeTruthy();
  }));
});
