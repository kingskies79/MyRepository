import { Component, OnInit, AfterViewInit, Input, ContentChild, QueryList } from '@angular/core';
import {CarouselItemComponent} from '../carousel-item/carousel-item.component'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ContentChild(CarouselItemComponent) carouselItemList: QueryList<CarouselItemComponent>;
  @Input() delay:  500;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const carouselItems = this.carouselItemList.toArray();
    let count = 0;
    const max = carouselItems.length;
    setInterval(() => {
      const i = count % max;
      carouselItems.forEach((item) => item.isActive = false);
      carouselItems[i].isActive = true;
      count += 1;
    }, this.delay);
  }

}
