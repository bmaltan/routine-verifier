import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[rv-button]'
})
export class ButtonDirective {
    @HostBinding('class')
    elementClass = 'rv-button';

    constructor() { }

}
