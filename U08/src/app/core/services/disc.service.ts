import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disc } from '../../features/models/disc.model';
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
}
