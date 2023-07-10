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

  movieVideoResult: any = [];

  movieCastDetails: any = [];


  ngOnInit() {

    let paramId: string = this.router.snapshot.paramMap.get('id')!;

    this.getMovieDetails(paramId);

    this.getVideo(paramId);

    this.getMovieCast(paramId);

  }
  

  getMovieDetails(id:string) {

    this.movieDetails = this.service.getMovieDetails(id).subscribe((result) => {

      this.movieDetails = result;

    })
      
  }


  getVideo(id: string) {
    
    this.service.getMovieVideo(id).subscribe((result) => {
      
      result.results.forEach((element: any) => {

        console.log(element);

        if (element.type === "Trailer" || element.type === "Teaser"  ) {
          
          this.movieVideoResult = element.key;

        }

      });

    })

  }

  getMovieCast(id: string) {
    
    this.service.getMovieCast(id).subscribe((result) => {

      this.movieCastDetails = result.cast;

    })

  }

}
