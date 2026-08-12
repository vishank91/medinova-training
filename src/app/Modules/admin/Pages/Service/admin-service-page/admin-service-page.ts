import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiCallingService } from '../../../../../Service/api-calling-service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-service-page',
  standalone: false,
  templateUrl: './admin-service-page.html',
  styleUrl: './admin-service-page.css',
})
export class AdminServicePage {
  data: any = []
  constructor(private api: ApiCallingService, private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.api.getRecord("service").subscribe((response: any) => {
      this.data = response.map((x: any) => ({
        ...x,
        icon: this.sanitizer.bypassSecurityTrustHtml(x.icon)
      }))
      this.cdr.detectChanges()
    })
  }
}
