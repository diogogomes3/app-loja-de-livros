import { Injectable } from '@angular/core';

@Injectable({ // pattern singleton (uma classe que só pode ser instanciada uma única vez)
  providedIn: 'root'
})
export class StorageAdaptorService {

  constructor() { }
}
