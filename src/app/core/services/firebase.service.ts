import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  DocumentSnapshot
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firestore: Firestore = inject(Firestore);

  getData(collection_name: string): Observable<DocumentSnapshot[]> {
    return collectionData(collection(this.firestore, collection_name));
  }

  addData(data: any, collection_name: string) {
    return addDoc(collection(this.firestore, collection_name), data);
  }
}
