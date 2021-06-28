import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBranchesComponent } from './list-branches.component';

describe('ListBranchesComponent', () => {
  let component: ListBranchesComponent;
  let fixture: ComponentFixture<ListBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBranchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
