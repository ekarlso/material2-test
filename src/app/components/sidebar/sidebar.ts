import {Component} from 'angular2/core';
import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

@Component({
    selector: 'navigation',
    template: require('./sidebar.html'),
    styles: [require('./sidebar.scss')],
    directives: [MD_SIDENAV_DIRECTIVES, MdButton, MdToolbar]
})
export class Sidebar { }
