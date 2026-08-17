import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiCallingService } from '../../../../../Service/api-calling-service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-admin-package-page',
  standalone: false,
  templateUrl: './admin-package-page.html',
  styleUrl: './admin-package-page.css',
})
export class AdminPackagePage {
  data: any = []
  env = environment
  constructor(private api: ApiCallingService, private cdr: ChangeDetectorRef) { }

  deleteRecord(id: any) {
    if (window && window.confirm("Are You Sure You Want to Delete that Record : ")) {
      this.api.deleteRecord("package", { id: id }).subscribe((response) => {
        this.data = this.data.filter((x: any) => x.id !== id)
        this.cdr.detectChanges()
      })
    }
  }

  ngOnInit() {
    this.api.getRecord("package").subscribe({
      next: (response: any) => {
        this.data = response
        this.cdr.detectChanges()
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
