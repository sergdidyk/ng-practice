import { 
  Directive,
  OnInit, 
  Renderer2, 
  ElementRef, 
  HostListener, 
  HostBinding, 
  Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent'; //определяем свойства, которые хотим связать
  @Input() highlightColor: string = 'blue';

//в Hostbinding передаем свойство, кот. хоти привязать
  @HostBinding('style.backgroundColor') backgroundColor: string; 

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() { 
    this.backgroundColor = this.defaultColor; //задаем intial color
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
