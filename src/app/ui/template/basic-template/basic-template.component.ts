import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { IconComponent } from "../../components/icon/icon.component";
import { Content } from "../../../models/content.interface";

@Component({
  selector: "app-basic-template",
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: "./basic-template.component.html",
  styleUrl: "./basic-template.component.css",
})
export class BasicTemplateComponent {
  @Input() content!: Content;
  getNetworkKeys(networks: Record<string, string>): string[] {
    return Object.keys(networks);
  }
}
