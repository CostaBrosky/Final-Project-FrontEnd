import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from "../../models/client.model";
import {ClientService} from "../../services/client.service";
import {ClientsComponent} from "../clients/clients.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  clientList: Array<Client> = [];
  selectedClient: Client = new Client();
  errorMessage: string = "";

  @ViewChild(ClientsComponent) child: ClientsComponent | undefined;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAllClient().subscribe(data => {
      this.clientList = data;
    });
  }

  createClientRequest() {
    this.selectedClient = new Client();
    this.child?.showClientModal();
  }

  editClientRequest(item: Client) {
    this.selectedClient = Object.assign({}, item);
    this.child?.showClientModal()
  }

  saveClientWatcher(client: Client) {
    let itemIndex = this.clientList.findIndex(item => item.id === client.id);
    if (itemIndex !== -1) {
      this.clientList[itemIndex] = client;
    } else {
      this.clientList.push(client);
    }
  }

  deleteClient(item: Client, ind: number) {
    this.clientService.deleteClient(item).subscribe(data => {
      this.clientList.splice(ind, 1);
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }
}


