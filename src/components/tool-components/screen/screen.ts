import { Attribute, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tool-screen',
  imports: [
    CommonModule,
  ],
  templateUrl: './screen.html',
  styleUrl: './screen.css'
})
export class Screen {
  public readonly _sectionId: string | undefined;

  constructor(@Attribute('section-id')  sectionId?: string) {
    this._sectionId = sectionId ?? undefined;
  }

}
