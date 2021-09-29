import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnInit {
    constructor() { }
    @Input() rating:number=0;
    @Output() ratingNotify: EventEmitter<string> = new EventEmitter<string>();

    starWidth=0;

    ngOnInit() { 
        this.starWidth = this.rating * 91 / 5;
    }

    onClick() {
        this.ratingNotify.emit(`the rating is ${this.rating} was clicked`);
    }
}