import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-detail',
   templateUrl:  '../app/artist/artist-detail.component.html'
})
export class ArtistDetailComponent implements OnInit {

  artist;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute,private artistService: ArtistService) {
    // this.artist = this.artistService.getArtist("630662ea-1c7d-4208-99fd-ba3afec20f0c");
}
  ngOnInit() {
    let artistId = this.route.snapshot.params["artistId"];
    this.artist = this.artistService.getArtist(artistId);
  }


}
