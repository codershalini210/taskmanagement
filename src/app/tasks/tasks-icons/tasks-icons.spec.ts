import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksIcons } from './tasks-icons';

describe('TasksIcons', () => {
  let component: TasksIcons;
  let fixture: ComponentFixture<TasksIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
