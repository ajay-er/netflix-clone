import { Component } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service: MovieApiService) { }
  
  bannerResult: any = [];
  trendingMovies: any = [];

  ngOnInit(): void{
    
    this.bannerData();

    this.trendingMovieData();

  }

  //bannerdata
  bannerData() {

    this.service.bannerApiData().subscribe((result) => {

      this.bannerResult = result.results;
      
    })

  }

  //trending movie data
  trendingMovieData() {
    
    this.service.trendingMovieApiData().subscribe((result) => {
      
      this.trendingMovies = result.results;

      console.log(result);
      

    })

  }

}
