import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

//в Hostbinding передаем свойство, кот. хоти привязать
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; //задаем intial color

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() { 
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
