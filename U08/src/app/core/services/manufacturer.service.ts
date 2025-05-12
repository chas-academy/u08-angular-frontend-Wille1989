import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manufacturer } from '../../features/models/manufacturer.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../features/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  private apiUrl = 'https://u05-wbsp.onrender.com/api/manufacturer/index';

  constructor(private http: HttpClient) { }

  getAllManufacturers(): Observable<ApiResponse<Manufacturer[]>> {
    return this.http.get<ApiResponse<Manufacturer[]>>(this.apiUrl);
  }

  createManufacturer(data: { name: string; country: string  }):
  Observable<ApiResponse<Manufacturer[]>> {
    return this.http.post<ApiResponse<Manufacturer[]>>(
      'https://u05-wbsp.onrender.com/api/manufacturer/create',
      data
    );
  }

  updateManufacturerPartial(_id: string, updates: Partial<Manufacturer>): Observable<ApiResponse<Manufacturer>> {
    return this.http.patch<ApiResponse<Manufacturer>>(
      `https://u05-wbsp.onrender.com/api/manufacturer/update/${_id}`, updates)
  }

  getManufacturerById(_id: string): Observable<ApiResponse<Manufacturer>> {
    return this.http.get<ApiResponse<Manufacturer>>(
      `https://u05-wbsp.onrender.com/api/manufacturer/show/${_id}`);
  }

  deleteManufacturerById(_id: string): Observable<ApiResponse<Manufacturer>> {
    return this.http.delete<ApiResponse<Manufacturer>>(`https://u05-wbsp.onrender.com/api/manufacturer/delete/${_id}`);
  }
}
