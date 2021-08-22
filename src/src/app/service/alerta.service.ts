import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertaComponent } from '../alerta/alerta.component';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(

    private bsModalService: BsModalService
  ) { }

  private showAlert(message: string, type: String){
  const BsModalRef: BsModalRef = this.bsModalService.show(AlertaComponent)
  BsModalRef.content.type = type
  BsModalRef.content.message = message
  }

  showAlertDanger(message: string){
    this.showAlert(message, 'danger')
  }

  showAlerSuccess(message: string){
    this.showAlert(message, 'success')
  }

  showAlertInfo(message: string){
    this.showAlert(message, 'info')
  }




}



