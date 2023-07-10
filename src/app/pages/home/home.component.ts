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
  actionMovies: any = [];
  adventureMovies: any = [];
  animationMovies: any = [];
  documentedMovies: any = [];
  scienceFictionMovies: any = [];
  comedyMovies: any = [];
  thrillerMovies: any = [];


  ngOnInit(): void{
    
    this.bannerData();

    this.trendingMovieData();

    this.actionMoviesData();

    this.adventureMoviesData();

    this.animationMoviesData();

    this.comedyMoviesData();

    this.documenatedMoviesData();

    this.scienceFictionMoviesData();

    this.thrillerMoviesData();

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
      
    })

  }

  actionMoviesData() {
    
    this.service.fetchActionMovies().subscribe((result) => {
      
      this.actionMovies = result.results;

    })

  }


  thrillerMoviesData() {
    
    this.service.fetchThrillerMovies().subscribe((result) => {
      
      this.thrillerMovies = result.results;

    })

  }


  adventureMoviesData() {
    
    this.service.fetchAdventureMovies().subscribe((result) => {
      
      this.adventureMovies = result.results;

    })

  }


  comedyMoviesData() {
    
    this.service.fetchComedyMovies().subscribe((result) => {
      
      this.comedyMovies = result.results;

    })

  }


  animationMoviesData() {
    
    this.service.fetchAnimationMovies().subscribe((result) => {
      
      this.animationMovies = result.results;

    })

  }


  documenatedMoviesData() {
    
    this.service.fetchDocumentedMovies().subscribe((result) => {
      
      this.documentedMovies = result.results;

    })

  }


  scienceFictionMoviesData() {
    
    this.service.fetchSceinceFictionMovies().subscribe((result) => {
      
      this.scienceFictionMovies = result.results;

    })

  }

}
