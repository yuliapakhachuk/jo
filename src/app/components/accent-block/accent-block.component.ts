import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accent-block',
  templateUrl: './accent-block.component.html',
  styleUrls: ['./accent-block.component.scss']
})
export class AccentBlockComponent {
  @Input() width!: string;
  @Input() height!: string;
  @Input() top!: string;
  @Input() left!: string;
  @Input() translateX?: string;
  @Input() translateY?: string;



  generateStyles(){
    return {
      'width': this.width + 'px', 
      'height': this.height + 'px',
      'top': this.top + '%',
      'left': this.left + '%',
      'transform': `translateX(${this.translateX}%) translateY(${this.translateY}%)`
    }
  }

}
