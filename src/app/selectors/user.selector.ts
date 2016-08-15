import { Injectable } from '@angular/core';

@Injectable()
export class UserSelectors {

  getState() {
    return state$ => state$
      .select(s => s.users);
  }

}
