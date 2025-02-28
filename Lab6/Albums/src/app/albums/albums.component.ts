import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumsService } from '../albums.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgFor, RouterModule, CommonModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [HttpClient]
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((data) => {
      console.log('Albums loaded:', data); // Debugging
      this.albums = data;
    }, (error) => {
      console.error('Error loading albums:', error);
    });
  }

  fetchAlbums(): void {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
