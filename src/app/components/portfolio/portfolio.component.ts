import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lightbox, LIGHTBOX_EVENT, LightboxEvent } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  private _albums: { src: string; caption: string; thumb: string; }[] = [];
  portfolio = [];
  private _subscription: Subscription | undefined;

  constructor(private _lightboxEvent: LightboxEvent, private _lightbox: Lightbox, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('assets/data.json').subscribe((data: any) => {
      console.log(data);
      this.portfolio = data?.portfolio;
    });
  }

  open(index: number): void {
    if(this.portfolio[index]['url']){
      window.open(this.portfolio[index]['url'], '_blank');
    }else{
      let images: string[] = this.portfolio[index]['images'];
      for (let i = 0; i < images.length; i++) {
        const src = 'assets/portfolio/' + images[i];
        const caption = 'Image ' + (i + 1)+ ' sur '+images.length;
        const thumb = 'assets/portfolio/' + images[i];
        const album = {
          src: src,
          caption: caption,
          thumb: thumb
        };

        this._albums.push(album);
      }
      this._lightbox.open(this._albums, 0);
      this._subscription = this._lightboxEvent.lightboxEvent$
        .subscribe(event => this._onReceivedEvent(event));
    }
  }

  private _onReceivedEvent(event: any): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this._subscription?.unsubscribe();
      this._albums = [];
    }
  }
}
