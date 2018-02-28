import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
	selector: 'app-hero-form',
	templateUrl: './hero-form.component.html',
	styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

	public powers = new Array<string>('Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer');
	public model = new Hero(18, 'Dr IQ', this.powers.shift(), 'Chuck Overstreet');
	public submitted = false;

	public onSubmit(): void { 
		this.submitted = true; 
	}

	get diagnostic() { 
		return JSON.stringify(this.model); 
	}

	newHero() {
		this.model = new Hero(42, '', '');
	}

}