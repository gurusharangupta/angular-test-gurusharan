import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

@HostBinding('class.open') isOpen = false;
  constructor() { }
@HostListener('click') onToggleOpen(){
  this.isOpen = !this.isOpen;
}
}