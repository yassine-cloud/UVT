import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, addDoc } from 'firebase/firestore';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})



export class FirebaseService {
  app:any;
  db: any;
  
  constructor() { 
    this.app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(this.app);
  }

  //Get all data from firebase
  async getEnseignants(): Promise<any[]> {
    const enseignantsCollection = collection(this.db, 'enseignant');
    const enseignantsSnapshot = await getDocs(enseignantsCollection);

    const enseignantsArray: any[] = [];

    enseignantsSnapshot.forEach((doc) => {
      const enseignantData = doc.data();
      enseignantsArray.push({
        //id: doc.id,
        id: enseignantData['ID'],
        nom: enseignantData['nom'],
        prenom: enseignantData['prenom'],
        tel: enseignantData['tel'],
        mail: enseignantData['mail'],
        username: enseignantData['username'],
        password: enseignantData['password'],
      });
    });

    return [...enseignantsArray];
  }

/*
  async updateEnseignant(id: string, updatedData: any): Promise<void> {
    const enseignantDocRef = doc(this.db, 'enseignant', id);

    try {
      await setDoc(enseignantDocRef, updatedData, { merge: true });
      console.log('Enseignant updated successfully!');
    } catch (error) {
      console.error('Error updating enseignant: ', error);
    }
  }
*/

  async addEnseignant(data: any): Promise<void> {
    const enseignantsCollection = collection(this.db, 'enseignant');
  
    try {
      await addDoc(enseignantsCollection, data);
      console.log('Enseignant added successfully!');
      alert("Sign up successfully!");
    } catch (error) {
      console.error('Error adding enseignant: ', error);
    }
  }

  
  



} 


