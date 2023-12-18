import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse } from '../interfaces/req-res';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

interface state {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  #State = signal<state>({
    loading: true,
    users: [],
  });

  public users = computed(() => this.#State().users);
  public loagin = computed(() => this.#State().loading);

  constructor() {
    this.http
      .get<UserResponse>('https://reqres.in/api/users')
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#State.set({
          loading: false,
          users: res.data,
        });
      });
  }
}
