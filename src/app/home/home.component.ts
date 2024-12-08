import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <div class =home-container>
    <h3>WELCOME!</h3>
    <h1>I AM ANGELICA GUTIERREZ.</h1>
    <h4>A developer, designer, and student. 
    <br>
    I have been coding and creating projects for 6 years. Here you will find everything and anything there is to know about me and my experience.  </h4>
  </div>
  `,
  styles: ` 
  .home-container {
  height: 100%;
  width: 50%;
  padding-top: 20px;
  right:0;
  margin-top: 8%;
  margin-left: 3%;
}
  `
})
export class HomeComponent {

}
