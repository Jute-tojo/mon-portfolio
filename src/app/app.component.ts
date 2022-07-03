import { Component } from '@angular/core';
import { faBriefcase, faContactCard, faDownload, faEnvelopesBulk, faFileArrowDown, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tojo RAMAROSON';
  faHome = faHome;
  faUser = faUser;
  faBriefcase = faBriefcase;
  faContact = faContactCard;
  faEnvelopesBulk = faEnvelopesBulk;
  ligth = 0;

  ngOnInit(){
    AOS.init();
    }

    toggleDarkTheme() : void {
      document.body.classList.toggle('light-mode');
   }
}
