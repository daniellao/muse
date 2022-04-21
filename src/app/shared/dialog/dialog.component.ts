import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  @HostBinding('@state')
  private _state: 'opened' | 'closed' = 'closed';

  @Input()
  set state(state: 'opened' | 'closed') {
    this._state = state;
  }

  @Output()
  closed = new EventEmitter<void>();
}
