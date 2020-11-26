import { Component, OnInit } from '@angular/core';
import {ModalidadesService} from "../../../../services/modalidades.service";

@Component({
  selector: 'app-modalidades',
  templateUrl: './modalidades.component.html',
  styleUrls: ['./modalidades.component.sass'],
  providers: [ModalidadesService]
})
export class ModalidadesComponent implements OnInit {

  constructor(private modalidadesService:ModalidadesService) { }

  ngOnInit() {
  }

}
