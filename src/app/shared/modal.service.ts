
import { Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { DialogComponent } from './dialog/dialog.component'; 

@Injectable()
export class ModalService {
  constructor(private injector: Injector) {}


  showDialog() {
    const popupEl: NgElement & WithProperties<DialogComponent> = document.createElement('popup-element') as any;

    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

    popupEl.state = 'opened';

    document.body.appendChild(popupEl);
  }
}


