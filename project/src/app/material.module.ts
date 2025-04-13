import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ],
    exports: [
        
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatSnackBarModule,
        MatDialogModule,
        MatSelectModule,
    ],
    providers: [],

})
export class MaterialModule {}