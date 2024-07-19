import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { detail, detailSerie } from '../../interfaces/detail.interface';
import { CommonModule } from '@angular/common';
import { Video } from '../../interfaces/video.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [
    CommonModule,
   
  ],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent {
 
  public details!: detail ;
  public detailsSerie!: detailSerie;
  public videosMovies!: Video;

 constructor(
  private service: MoviesService,
  private route: ActivatedRoute,
  private sanitizer: DomSanitizer
 ){
  this.route.params.subscribe(
    param => {
      if(param['type'] === 'movie'){
        this.service.getMovieDetailsById(param['id']).subscribe(
          details =>{
           this.details = details
           console.log(details.id)
           this.getVideoMovie(details.id)
          }
        )
      }
      if(param['type'] === 'serie'){
        this.service.getSerieDetailsById(param['id']).subscribe(
          details =>{
            this.detailsSerie = details
            console.log(this.detailsSerie.id)
            this.getVideosSerie(this.detailsSerie.id)
          }
        )
      }
    }
  )
 }

 getVideoMovie(id:number){
  console.log(id)
 this.service.getVideosMovieById(id).subscribe(
  videos =>{
    this.videosMovies = videos
  }
 )
 }
 getVideosSerie(id:number){
  this.service.getVideosSerieById(id).subscribe(
    videos =>{
      this.videosMovies = videos
      console.log(videos)
    }
  )
 }

 getVideoUrl(videoKey: string): SafeResourceUrl {
  const videoUrl = `https://www.youtube.com/embed/${videoKey}`;
  return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
}

 convertirDuracion(minutos:number) {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;
  return `${horas}h ${minutosRestantes}min`;
}



}
