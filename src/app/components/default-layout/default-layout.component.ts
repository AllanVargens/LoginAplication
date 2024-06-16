import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export class DefaultLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';
  @Input() disablePrimaryBtn: boolean = true;
  @Output('submit') onSubmit: EventEmitter<any> = new EventEmitter();
  @Output('navigate') onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
