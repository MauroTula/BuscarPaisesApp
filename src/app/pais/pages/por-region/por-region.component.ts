import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  addClassCss(param: string): string {
    return (param === this.regionActiva) ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2'
  }

  activarRegion(data: string) {

    if (data === this.regionActiva) { return }

    this.regionActiva = data;
    this.paises = []

    this.paisService.buscarRegion(data).subscribe(paises => {
      this.paises = paises
    })

  }

}
