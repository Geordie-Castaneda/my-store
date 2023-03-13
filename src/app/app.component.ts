import {Component, OnInit} from '@angular/core';
import {CarritoService} from "./carrito.service";
import {DataSharingService} from "./data-sharing.service";
// import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Productos{
  idProducto: number,
  Nombre: string,
  Descripcion: string,
  Precio: number,
  Disponible: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-store-angular-node';
  public productos = [];

  datos: Productos[] = [];

  // constructor(private http: HttpClient) {}


  // ngOnInit() {
  //   this.http.get<Productos[]>('http://localhost:3000/datos')
  //     .subscribe(datos => this.datos = datos);
  // }

  constructor(private carritoService: CarritoService, private dataSharingService: DataSharingService) {
    // Comunicación entre componentes
    this.dataSharingService.currentMessage.subscribe(mensaje => {
      if (mensaje == "car_updated") {
        this.refrescarCarrito();
      }
    })
  }


  public async refrescarCarrito() {
    this.productos = await this.carritoService.obtenerProductos();
  }

  public total() {
    // Quién te conoce reduce
    let total = 0;
    this.productos.forEach(p => total += p);
    return total;
  }

  ngOnInit(): void {
    this.refrescarCarrito();
  }

  
}