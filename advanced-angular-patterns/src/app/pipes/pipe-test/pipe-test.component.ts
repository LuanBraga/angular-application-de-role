import { Component, OnInit, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.scss']
})
export class PipeTestComponent implements OnInit {
  count!: number;
  secondMap: {[k: string]: string} = {
    '=0': 'second',
    '=1': 'second',
    'other': 'seconds'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
