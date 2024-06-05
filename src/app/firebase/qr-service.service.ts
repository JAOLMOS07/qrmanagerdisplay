import { Injectable, inject } from "@angular/core";
import { Firestore, doc, docData } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Content } from "../models/content.interface";
import { Link } from "../models/link.interface";

const CONTENT_PATH = "Contents";
const LINK_PATH = "links";
@Injectable({
  providedIn: "root",
})
export class QrService {
  private _firestore = inject(Firestore);

  getContentById(contentId: string): Observable<Content> {
    const contentDocRef = doc(this._firestore, `${CONTENT_PATH}/${contentId}`);
    return docData(contentDocRef) as Observable<Content>;
  }
  getLinkById(linkId: string): Observable<Link> {
    const contentDocRef = doc(this._firestore, `${LINK_PATH}/${linkId}`);
    return docData(contentDocRef) as Observable<Link>;
  }
}
