import { Component, model } from '@angular/core';
import { Puesto, Jerarquia, Area } from '../../../utils/data';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-table-generales',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './table-generales.component.html',
})
export class TableGeneralesComponent {
  puesto = Puesto;
  jerarquia = Jerarquia;
  area = Area;

  generalesForm = model<FormGroup>(
    new FormGroup({
      nombre_puesto: new FormControl('', Validators.required),
      nivel_puesto: new FormGroup({
        nivel: new FormControl('', Validators.required),
        area: new FormControl('', Validators.required),
      }),
      puesto_jefe: new FormControl('', Validators.required),
      puesto_supervisa1: new FormGroup({
        puesto1: new FormControl('', Validators.required),
        puesto2: new FormControl('', Validators.required)
      }),
      puesto_supervisa2: new FormGroup({
        puesto1: new FormControl('', Validators.required),
        puesto2: new FormControl('', Validators.required)
      }),
    })
  );
}
