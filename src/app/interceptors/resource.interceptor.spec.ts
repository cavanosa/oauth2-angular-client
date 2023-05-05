import { TestBed } from '@angular/core/testing';

import { ResourceInterceptor } from './resource.interceptor';

describe('ResourceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ResourceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ResourceInterceptor = TestBed.inject(ResourceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
