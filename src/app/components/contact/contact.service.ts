import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  sendMessage(message: any) {
    // Aquí puedes integrar con una API real o servicio de correo
    console.log('Mensaje enviado:', message);
  }
}
