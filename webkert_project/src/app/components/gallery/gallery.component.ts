import { Component, Input } from '@angular/core';
import { Tattoo } from '../../models/tattoo.model';
import { CommonModule, DecimalPipe } from '@angular/common';


@Component({

  imports: [CommonModule],
  providers: [DecimalPipe],

  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() tattoos: Tattoo[] = [];
}