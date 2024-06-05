import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { IconComponent } from "./ui/components/icon/icon.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, IconComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "qrmanagerdisplay";
}
