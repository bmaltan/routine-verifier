import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[app-card]'
})
export class CardDirective {
    @HostBinding('class')
    elementClass = 'app-card';

    constructor() { }

}
