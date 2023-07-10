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


  //banner
  bannerApiData(): Observable<any>{

    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);

  }


  //searchmovies
  searchMovieApiDAta(data:any): Observable<any>{
    
    return this.http.get( `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);

  }


  //movieData
  getMovieDetails(id:any): Observable<any>{
    
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);

  }

  
  //get the video of clicking movie
  getMovieVideo(id: any): Observable<any>{
    
    return this.http.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`);
    
  }
  

  //get the movie cast details
  getMovieCast(id: any): Observable<any>{
    
    return this.http.get(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);

  } 


   //fetch trending movies
   trendingMovieApiData(): Observable<any>{
    
    return this.http.get( `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);

  } 


  //fetch action movies
  fetchActionMovies(): Observable<any>{
    
    return this.http.get( `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);

  }


   //fetch adventure movies
  fetchAdventureMovies(): Observable<any>{
    
    return this.http.get( `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);

  }


   //fetch animation movies
  fetchAnimationMovies(): Observable<any>{
    
    return this.http.get( `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);

  }


   //fetch comedy movies
  fetchComedyMovies(): Observable<any>{
    
    return this.http.get( `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);

  }


   //fetch documentary movies
  fetchDocumentedMovies(): Observable<any>{
    
    return this.http.get( `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);

  }


   //fetch science-fiction movies
  fetchSceinceFictionMovies(): Observable<any>{
    
    return this.http.get( `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`);

  }


   //fetch thriller movies
  fetchThrillerMovies(): Observable<any>{
    
    return this.http.get( `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);

  }

}
