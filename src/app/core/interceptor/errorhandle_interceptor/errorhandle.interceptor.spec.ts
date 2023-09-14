import { TestBed } from '@angular/core/testing';

import { ErrorhandleInterceptor } from './errorhandle.interceptor';

describe('ErrorhandleInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorhandleInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorhandleInterceptor = TestBed.inject(ErrorhandleInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
