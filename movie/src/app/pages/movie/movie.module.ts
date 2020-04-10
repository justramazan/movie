import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MovieRoutingModule } from './movie-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { MovieGenresComponent } from './movie-genres/movie-genres.component';
import {MatToolbarModule} from '@angular/material/toolbar';





@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent, MovieGenresComponent],
  imports: [
    MatChipsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MovieRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatDividerModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class MovieModule { }
