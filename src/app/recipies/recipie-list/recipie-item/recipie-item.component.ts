import { Component, Input } from '@angular/core';
import { Recipie } from '../../recipie.model';
import { RecipieService } from '../../recipie.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent {
  @Input()recipie: Recipie;
  @Input()index: number;

  constructor(private recipieService: RecipieService){}

}
