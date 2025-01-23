import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://127.0.0.1:8000/api/productos/'; // Cambia según tu configuración

  constructor(private http: HttpClient) {}


  //Servicio para obtener todos los productos

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap((data) => console.log('Productos recibidos del backend:', data)), // Agrega este log
      catchError((error) => {
        console.error('Error al obtener productos:', error);
        return throwError(() => new Error(error));
      })
    );
  }
  
  //Servicio para obtener un solo producto

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }


  //Servicio para agregar un poducto

  createProduct(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }


  //Servicio para editar un producto

  updateProduct(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }


  //Servicio para eliminar un poducto

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
