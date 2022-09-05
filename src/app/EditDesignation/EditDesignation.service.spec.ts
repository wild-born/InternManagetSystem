/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditDesignationService } from './EditDesignation.service';

describe('Service: EditDesignation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditDesignationService]
    });
  });

  it('should ...', inject([EditDesignationService], (service: EditDesignationService) => {
    expect(service).toBeTruthy();
  }));
});
