import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';
import { ListaProdutoComponent } from './lista-produto.component';
import { FormsModule } from '@angular/forms';

describe('ListaProdutoComponent', () => {
  let component: ListaProdutoComponent;
  let fixture: ComponentFixture<ListaProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppRoutingModule, FormsModule],
      declarations: [ ListaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
