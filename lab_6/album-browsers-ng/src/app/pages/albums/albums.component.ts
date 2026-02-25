import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  private albumService = inject(AlbumService);
  private router = inject(Router);

  albums: Album[] = [];
  loading = true;
  error = '';
  deletingIds = new Set<number>();

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.error = '';

    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load albums.';
        this.loading = false;
      }
    });
  }

  openAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation(); // чтобы клик по кнопке не открывал альбом
    this.deletingIds.add(id);

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
        this.deletingIds.delete(id);
      },
      error: () => {
        this.error = `Failed to delete album #${id}`;
        this.deletingIds.delete(id);
      }
    });
  }

  trackByAlbumId(index: number, album: Album): number {
    return album.id;
  }
}