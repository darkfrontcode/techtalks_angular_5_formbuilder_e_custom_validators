import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export function eighteen(form: FormControl){
	return form.value >= 18 ? null : { 'eighteen': true };
}

export function isBob(group: FormGroup) {
	return (group.get('name').value || '').toLowerCase().includes('bob') ? { 'isBob': true } : null;
}

export class Person {

	public name: string;
	public age: string;

	public static toSchema(): FormGroup {
		return new FormBuilder().group(
			{
				name: [null, Validators.required],
				age: [null, eighteen]
			},
			{ 
				validator: isBob 
			}
		)
	}
}

@Component({
	selector: 'app-reactive-forms',
	templateUrl: './reactive-forms.component.html',
	styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

	public form: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = Person.toSchema();
	}

	public submit(form: FormGroup): void {

		const person = new Person();
		person.name = form.get('name').value;
		person.age = form.get('age').value;
		console.log(person);

	}

}
