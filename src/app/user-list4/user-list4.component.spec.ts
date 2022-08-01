import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserList4Component } from './user-list4.component';

describe('UserList4Component', () => {
  let component: UserList4Component;
  let fixture: ComponentFixture<UserList4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserList4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserList4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
