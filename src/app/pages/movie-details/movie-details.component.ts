import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  constructor(private service: MovieApiService, private router: ActivatedRoute) { }
  
  movieDetails: any = [];

  ngOnInit() {

    let paramId: string = this.router.snapshot.paramMap.get('id')!;

    this.getMovieDetails(paramId);

  }
  

  getMovieDetails(id:string) {

    this.movieDetails = this.service.getMovieDetails(id).subscribe((result) => {
       
      this.movieDetails = result;

    })
      
  }

}
