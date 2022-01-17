import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from 'src/app/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  public githubUserQuery!:string;
  username!:string;
  constructor(private RepositoriesService:RepositoriesService) {}
   repos=<any>{};

  ngOnInit(): void {
  
  }
  getRepo(){
    this.RepositoriesService.updateProfile(this.username);
    this.RepositoriesService.getProfileRepos().subscribe((result)=>{
      console.warn(result)
      this.repos=result;
    })
  }
  
  

}