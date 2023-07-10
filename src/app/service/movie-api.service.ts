import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }
  
  baseUrl: string = 'https://api.themoviedb.org/3';
  
  apiKey: string = '42962be0f5de48c9429a95717e9b8e5d';

  //urls
  bannerApi: string = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`;

  trendingMoviesApi:string =  `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`;

  //banner
  bannerApiData(): Observable<any>{

    return this.http.get(this.bannerApi);

  }


  // trendingmovie
  trendingMovieApiData(): Observable<any>{
    
    return this.http.get(this.trendingMoviesApi);

  } 

  //searchmovies
  searchMovieApiDAta(data:any): Observable<any>{
    
    return this.http.get( `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);

  }


  //movieData
  getMovieDetails(id:any): Observable<any>{
    
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);

  }


}
