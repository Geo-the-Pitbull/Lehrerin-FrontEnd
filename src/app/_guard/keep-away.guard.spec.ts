import { TestBed } from '@angular/core/testing';

import { KeepAwayGuard } from './keep-away.guard';

describe('KeepAwayGuard', () => {
  let guard: KeepAwayGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KeepAwayGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
