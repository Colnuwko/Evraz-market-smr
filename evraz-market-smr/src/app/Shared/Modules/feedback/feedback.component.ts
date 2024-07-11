import { Component, OnInit} from '@angular/core';
import { Feed } from "../../Interfaces/feed";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {FeedbackService} from "../../Services/feedback.service";
@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
  providers: [FeedbackService]
})
export class FeedbackComponent {
    products!: Feed[];

    responsiveOptions: any[] | undefined;

    constructor(private productService: FeedbackService) {}

    ngOnInit() {
        this.productService.getProductsSmall().subscribe((products) => {
            this.products = products;
        });
        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }


}
