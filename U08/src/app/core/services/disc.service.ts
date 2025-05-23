import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Disc, DiscCreate } from '../../features/models/disc.model';
import { ApiResponse } from '../../features/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class DiscService {
  private apiUrl = 'https://u05-wbsp.onrender.com/api/discs/index';

  constructor(private http: HttpClient) { }

  getAllDiscs(): Observable<ApiResponse<Disc[]>> {
    return this.http.get<ApiResponse<Disc[]>>(this.apiUrl);
  }

  searchDiscs(term: string): Observable<ApiResponse<Disc[]>> {
    const params = new HttpParams().set('search', term);
    return this.http.get<ApiResponse<Disc[]>>(this.apiUrl, { params });
  }

  createDisc(disc: DiscCreate): Observable<ApiResponse<Disc>> {
    const url = 'https://u05-wbsp.onrender.com/api/discs/create';
    return this.http.post<ApiResponse<Disc>>(url, disc);
  }

  updateDiscPartial(_id: string, updates: Partial<Disc>): Observable<ApiResponse<Disc>> {
    return this.http.patch<ApiResponse<Disc>>(
      `https://u05-wbsp.onrender.com/api/discs/update/${_id}`,updates);
  }

  getDiscById(_id: string): Observable<ApiResponse<Disc>> {
    return this.http.get<ApiResponse<Disc>>(
      `https://u05-wbsp.onrender.com/api/discs/show/${_id}`);
  }

  deleteDiscById(_id: string): Observable<ApiResponse<Disc>> {
    return this.http.delete<ApiResponse<Disc>>(
      `https://u05-wbsp.onrender.com/api/discs/delete/${_id}`);
  }
}
