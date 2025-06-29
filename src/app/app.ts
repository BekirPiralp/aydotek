import { Component , ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected title = 'aydotek';

  protected background_image_url = "none"//"/assets/background/space.jpg";

  ngOnInit(){
    document.documentElement.style.setProperty('--background-image-url',`url("${this.background_image_url}")`)
  }

}

