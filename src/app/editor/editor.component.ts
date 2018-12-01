import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor;
  constructor() { }

  ngOnInit() {
    this.editor = new Quill('#editor', {
      theme: 'snow'
    });
  }

}
