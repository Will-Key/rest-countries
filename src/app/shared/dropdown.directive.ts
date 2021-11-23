import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    console.log('is clicked');
    console.log(event.target);
    console.log(this.elRef.nativeElement.contains(event.target))
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}