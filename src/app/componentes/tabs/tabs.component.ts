import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(event: any) {
    const link = event.srcElement;
    const pestaniaClickeada = link.parentElement;
    const contenedorDePestanias = pestaniaClickeada.parentElement;
    const cssClassPestaniaActiva = 'pestania-activa';

    for (let i = 0; i < contenedorDePestanias.childNodes.length; i++) {
      const pestania = contenedorDePestanias.childNodes[i];

      if (pestania.classList.contains(cssClassPestaniaActiva)) {
        pestania.classList.remove(cssClassPestaniaActiva);
      }
    }

    pestaniaClickeada.classList.add(cssClassPestaniaActiva);
  }
}
