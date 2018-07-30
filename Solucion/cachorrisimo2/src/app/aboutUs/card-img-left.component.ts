import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-img-left',
    templateUrl: './card-img-left.component.html'
})
export class CardImgLeftComponent {
    @Input() title: string;
}