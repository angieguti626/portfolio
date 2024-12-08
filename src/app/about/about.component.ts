import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
 <div class="split ">
    <h2>WHO AM I?</h2>
    <h4>Growing up in San Bernardino, I have always been finding ways to learn and grow.
      Being the youngest of three, I have always looked to others for inspiration and followed in their footsteps. 
      That was until I tried out web development for the first time during my first degree. 
      With zero experience, I watched YouTube tutorials, read online articles, and researched everything I could. 
      I coded from sunrise to sundown.
      It was something I enjoyed learning and hope to continue creating projects. </h4>
      <BR>
      <h4>During my freetime, I love being part of the music scene. 
      Whether it is going out to a show, listening to albums in my room, or working at a local venue,
      I love music with a passion and am always looking out for new bands to support.</h4>
</div>

<div class="split ">
    <p>Insert image here.</p>
</div>


  `,
  styles: `
  .split {
  width: 50%;
  float: left;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;

}


    `
})
export class AboutComponent {

}
