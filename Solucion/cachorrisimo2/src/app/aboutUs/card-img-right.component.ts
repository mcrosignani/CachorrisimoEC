import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-img-right',
    templateUrl: './card-img-right.component.html'
})
export class CardImgRightComponent {
    @Input() title: string;
}