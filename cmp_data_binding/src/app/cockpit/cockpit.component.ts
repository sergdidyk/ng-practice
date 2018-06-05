import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // @Output - передаем что-либо на внешнюю сторону компонента. Внутри @Output задаем имя, по которому нужно обращаться к элементу
  //EventEmitter - Angular object, который позволяет эмитировать свои соственные события

  //newServerName = '';
  // newServerContent = '';
  //передаем во @ViewChild local reference из HTML

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, //local reference
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:  nameInput.value, //local reference
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
