import { Component, AfterContentInit, ContentChildren, Input, QueryList } from '@angular/core';
import { CarouselItemComponent} from '../carousel-item/carousel-item.component';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterContentInit {
  @Input() delay: number;
  @ContentChildren(CarouselItemComponent)  carousleItemsList: QueryList<CarouselItemComponent>;
  constructor() {

   }

  ngAfterContentInit() {
    const carouselItems = this.carousleItemsList.toArray();
    let count = 0;
    const max = carouselItems.length;

    setInterval(() => {
      let i = count % max;
      carouselItems.forEach((item) => item.isActive = false);
      carouselItems[i].isActive = true;
      count += 1;
    }, this.delay);
  }

  }


