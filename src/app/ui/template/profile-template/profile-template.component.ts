import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { IconComponent } from "../../components/icon/icon.component";
import { Content } from "../../../models/content.interface";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "../../components/item/item.component";

@Component({
  selector: "app-profile-template",
  standalone: true,
  imports: [IconComponent, CommonModule, ItemComponent],
  templateUrl: "./profile-template.component.html",
  styleUrls: ["./profile-template.component.css"], // corregido el nombre de la propiedad
})
export class ProfileTemplateComponent implements OnInit, OnDestroy {
  @Input() content!: Content;
  currentCoverIndex: number = 0;
  coverUrl: string = "";
  coverChangeInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.initializeCover();
    this.startCoverChange();
  }

  ngOnDestroy(): void {
    if (this.coverChangeInterval) {
      clearInterval(this.coverChangeInterval);
    }
  }

  initializeCover(): void {
    if (this.content.multimedia && this.content.multimedia.length > 0) {
      this.coverUrl = this.content.multimedia[this.currentCoverIndex];
    } else {
      this.coverUrl = this.content.logoUrl;
    }
  }

  startCoverChange(): void {
    if (this.content.multimedia && this.content.multimedia.length > 0) {
      this.coverChangeInterval = setInterval(() => {
        this.currentCoverIndex =
          (this.currentCoverIndex + 1) % this.content.multimedia.length;
        this.coverUrl = this.content.multimedia[this.currentCoverIndex];
      }, 4000); // Cambia cada 5 segundos
    }
  }
  getNetworkKeys(networks: Record<string, string>): string[] {
    return Object.keys(networks);
  }
}
