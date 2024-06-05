import { ApplicationConfig } from "@angular/core";
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from "@angular/router";

import { routes } from "./app.routes";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyA99AfsT0emv3D3pvhjdnA0W8dp4aOo7XY",
        authDomain: "qr-manager-3dabf.firebaseapp.com",
        projectId: "qr-manager-3dabf",
        storageBucket: "qr-manager-3dabf.appspot.com",
        messagingSenderId: "227020465043",
        appId: "1:227020465043:web:388e678330823aa039be66",
        measurementId: "G-HCVP8XLDP2",
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
