import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {
  @Input() element!: {title: string, desc: string, btnLink: string, imagePath: string, price: string, tags: string[]};
  constructor() { }

  ngOnInit(): void {
  }

}
