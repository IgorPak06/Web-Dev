import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any = {};
  albumTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.albumTitle = this.album.title;
    });
  }

  saveAlbum(): void {
    this.album.title = this.albumTitle;
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe();
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
