import { TestBed } from '@angular/core/testing';

import { CashproUserGuard } from './cashpro-user.guard';

describe('CashproUserGuard', () => {
  let guard: CashproUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CashproUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
