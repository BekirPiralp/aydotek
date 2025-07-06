import { Attribute, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tool-screen',
  imports: [
    CommonModule,
  ],
  templateUrl: './screen.html',
  styleUrl: './screen.css',
})
export class Screen {
  public readonly _style: string;
  public readonly _class: string;

  constructor(@Attribute('style') _style?:string,
    @Attribute('class') _class?:string) {
    this._style = _style ?? '';
    this._class = _class ?? '';
  }

}
