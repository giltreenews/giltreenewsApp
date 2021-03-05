import { TestBed } from '@angular/core/testing';

import { RoleGuard } from './role.guard.guard';

describe('GuardsGuard', () => {
  let guard: RoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
