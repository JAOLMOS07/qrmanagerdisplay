import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";
import { QrService } from "../../firebase/qr-service.service";
import { AsyncPipe, CommonModule } from "@angular/common";
import { Content } from "../../models/content.interface";
import { Link } from "../../models/link.interface";
import { IconComponent } from "../components/icon/icon.component";
import { BasicTemplateComponent } from "../template/basic-template/basic-template.component";
import { ProfileTemplateComponent } from "../template/profile-template/profile-template.component";

@Component({
  selector: "app-qr-display",
  standalone: true,
  imports: [
    AsyncPipe,
    IconComponent,
    CommonModule,
    BasicTemplateComponent,
    ProfileTemplateComponent,
  ],
  templateUrl: "./qr-display.component.html",
  styleUrl: "./qr-display.component.css",
})
export class QrDisplayComponent implements OnInit {
  private qrService = inject(QrService);
  private router = inject(Router);
  @Input() linkId?: string;
  public content!: Content;
  public link!: Link;
  public isLoading: boolean = true;

  getContent(id: string) {
    this.qrService.getContentById(id).subscribe({
      next: (content: Content) => {
        this.content = content;
        console.log(content.networks![0]);
      },
      error: () => {
        console.log("error obteniendo el contenido");
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
  ngOnInit(): void {
    if (this.link) {
      return;
    }
    if (!this.linkId) {
      return;
    }

    this.isLoading = true;
    this.qrService.getLinkById(this.linkId).subscribe({
      next: (link: Link) => {
        if (link.contentId) {
          this.getContent(link.contentId);
        } else {
          this.router.navigateByUrl("/nocontent");
        }
      },
      error: () => {
        console.log("error obteniendo el link");
        this.isLoading = false;
      },
      complete: () => {},
    });
  }
}
