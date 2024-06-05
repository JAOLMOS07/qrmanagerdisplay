import { Routes } from "@angular/router";
import { QrDisplayComponent } from "./ui/qr-display/qr-display.component";
import { NotContentComponent } from "./ui/not-content/not-content.component";

export const routes: Routes = [
  { path: "notcontent", component: NotContentComponent },
  { path: "qr/:linkId", component: QrDisplayComponent },
  { path: "**", redirectTo: "notcontent", pathMatch: "full" },
];
