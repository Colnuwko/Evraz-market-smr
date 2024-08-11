import { Component, OnInit} from '@angular/core';
import {Supplier} from "../../Interfaces/supplier";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {FeedbackService} from "../../Services/feedback.service";
import {SupplierService} from "../../Services/supplier.service";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
  providers: [FeedbackService, SupplierService]
})
export class FeedbackComponent {
    suppliers!: Supplier[];
    responsiveOptions: any[] | undefined;

    constructor(private supplierService: SupplierService) {}

    ngOnInit() {
        this.supplierService.getallsuppliers().subscribe((suppliers) => {
            this.suppliers = suppliers;
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
