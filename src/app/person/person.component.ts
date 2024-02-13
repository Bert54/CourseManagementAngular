import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit {
  id!: number;
  name!: string;
  avatarLink!: string;

  ngOnInit(): void {
    this.id = 1;
    this.name = 'pootis';
    this.avatarLink = '/assets/default_user_picture.png';
  }

}
