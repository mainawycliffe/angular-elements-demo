import { TestBed } from '@angular/core/testing';

import { HelloWorldServiceService } from './hello-world-service.service';

describe('HelloWorldServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloWorldServiceService = TestBed.get(HelloWorldServiceService);
    expect(service).toBeTruthy();
  });
});
