import {Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent implements OnInit {
  id!: number;
  name!: string;
  avatarLink!: string;
  viewed!: boolean;

  ngOnInit(): void {
    this.id = 1;
    this.name = 'pootis';
    this.avatarLink = '/assets/default_user_picture.png';
    this.viewed = false;
  }

  onButtonClick(): void {
    this.viewed = !this.viewed;
  }

}
