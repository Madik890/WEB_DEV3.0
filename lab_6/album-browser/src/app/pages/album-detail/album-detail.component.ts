import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private albumService = inject(AlbumService);

  album: Album | null = null;
  editedTitle = '';
  loading = true;
  saving = false;
  error = '';
  successMessage = '';

  ngOnInit(): void {
    this.loadAlbum();
  }

  loadAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'Invalid album ID.';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.error = '';
    this.successMessage = '';

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album details.';
        this.loading = false;
      }
    });
  }

  save(): void {
    if (!this.album) return;

    const trimmed = this.editedTitle.trim();
    if (!trimmed) {
      this.error = 'Title cannot be empty.';
      return;
    }

    this.saving = true;
    this.error = '';
    this.successMessage = '';

    const updatedAlbum: Album = {
      ...this.album,
      title: trimmed
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (resp) => {
        this.album = resp;
        this.editedTitle = resp.title;
        this.saving = false;
        this.successMessage = 'Album title updated successfully (simulated).';
      },
      error: () => {
        this.error = 'Failed to update album.';
        this.saving = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
    // можно и this.location.back();
  }
}