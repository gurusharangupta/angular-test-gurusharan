import { Directive, OnInit, Renderer2, ElementRef, HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective implements OnInit{

@HostBinding('style.color') color: string = '#777';
  constructor(private elementRef: ElementRef,private renderer: Renderer2) { }
ngOnInit(){
this.renderer.setStyle(this.elementRef.nativeElement,'font-family','Impact')
}

@HostListener('mouseover') onMouseOver(eventData: Event){
//this.renderer.setStyle(this.elementRef.nativeElement,'color','#87cefa');
this.color = '#87cefa';
}

@HostListener('mouseleave') onMouseOut(eventData: Event){
//this.renderer.setStyle(this.elementRef.nativeElement,'color','#777');
this.color = '#777';
}
}