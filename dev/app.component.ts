import { Component } from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        <header>
            <nav>
                <ul>
                    <li><a>Recipes</a><li>
                    <li><a>Shopping List</a><li>
                </ul>
            </nav>
        </header>
        <div class="main">
            <my-recipes></my-recipes>
        </div>
    `
})
export class AppComponent {
    
}