import { Directive, ElementRef, OnInit } from "@angular/core"; //чтобы сделать диретивой нужно импортировать 

//добавляем объект в декоратор для конфигурации директивы
@Directive({
    selector: '[appBasicHighlight]' //в массив берем, чтобы использовать в html без []
})
export class basicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}