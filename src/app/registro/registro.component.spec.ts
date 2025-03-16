import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComponent } from './registro.component';
import { UserService } from '../services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, RegistroComponent],
      providers: [UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register a user', () => {
    const userService = TestBed.inject(UserService);
    const spy = spyOn(userService, 'addUser').and.callThrough();

    component.user.name = 'Test User';
    component.user.email = 'test@example.com';
    component.user.age = 25;
    component.registerUser();

    expect(spy).toHaveBeenCalled();
  });
});