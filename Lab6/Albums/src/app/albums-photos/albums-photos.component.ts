import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './albums-photos.component.html',
  styleUrls: ['./albums-photos.component.css']
})
export class AlbumsPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.http
      .get<any[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .subscribe(data => {
        this.photos = data;
      });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
