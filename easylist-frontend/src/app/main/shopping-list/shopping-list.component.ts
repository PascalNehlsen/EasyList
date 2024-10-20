import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppinglistCompontent implements OnInit {
  tasks: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.http.get<any[]>('http://localhost:8000/api/tasks/').subscribe({
      next: (data) => {
        this.tasks = data;
        console.log(this.tasks);
      },
      error: (error) => {
        console.error('Error fetching tasks:', error);
      },
    });
  }
}
