import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Client} from "../../models/client.model";
import {ClientService} from "../../services/client.service";

declare var $: any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  errorMessage: string = "";

  @Input() client: Client = new Client();
  @Output() save = new EventEmitter<any>();
  constructor(private clientService: ClientService) { }

  saveClient() {
    this.clientService.saveClient(this.client).subscribe(data => {
      this.save.emit(data);
      $('#clientModal').modal('hide');
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }

  showClientModal() {
    $('#clientModal').modal('show');
  }
}
