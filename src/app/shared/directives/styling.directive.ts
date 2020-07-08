import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[rv-panel]'
})
export class PanelDirective {
    @HostBinding('class')
    elementClass = 'rv-panel';

    constructor() { }
}

@Directive({
    selector: '[rv-card]'
})
export class CardDirective {
    @HostBinding('class')
    elementClass = 'rv-card';

    constructor() { }
}

@Directive({
    selector: '[rv-main]'
})
export class MainDirective {
    @HostBinding('class')
    elementClass = 'rv-main';

    constructor() { }
}
