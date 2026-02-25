import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  albumId = 0;
  photos: Photo[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPhotos();
  }

  loadPhotos(): void {
    if (!this.albumId) {
      this.error = 'Invalid album ID.';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.error = '';

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album photos.';
        this.loading = false;
      }
    });
  }

  trackByPhotoId(index: number, photo: Photo): number {
    return photo.id;
  }
}