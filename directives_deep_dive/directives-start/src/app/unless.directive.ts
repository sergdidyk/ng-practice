import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef); //create a view in this view container
    } else {
      this.vcRef.clear(); //удалить все из этого места в DOM
    }
  } 
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

}
