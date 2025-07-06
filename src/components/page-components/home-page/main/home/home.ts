import { Component } from '@angular/core';
import { Navbar } from "../../others/navbar/navbar";
import { Footer } from "../../../defaults/footer/footer";
import { SectionAnasayfa } from "../../others/section-anasayfa/section-anasayfa";
import { SectionHizmetler } from "../../others/section-hizmetler/section-hizmetler";
import { SectionUrunler } from "../../others/section-urunler/section-urunler";
import { SectionIletisim } from "../../others/section-iletisim/section-iletisim";
import { Screen } from "../../../../tool-components/screen/screen";
import { SectionHakkinda } from "../../others/section-hakkinda/section-hakkinda";

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, SectionAnasayfa, SectionHizmetler, SectionUrunler, SectionIletisim, Screen, SectionHakkinda],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
