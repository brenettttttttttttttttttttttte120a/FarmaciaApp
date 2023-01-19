import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./Paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./Paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./Paginas/producto/producto.module').then( m => m.ProductoPageModule)
  },

  {
    path: 'detalle-producto',
    loadChildren: () => import('./Paginas/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./Paginas/agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'eliminar-producto',
    loadChildren: () => import('./Paginas/eliminar-producto/eliminar-producto.module').then( m => m.EliminarProductoPageModule)
  },
  {
    path: 'modificar-producto',
    loadChildren: () => import('./Paginas/modificar-producto/modificar-producto.module').then( m => m.ModificarProductoPageModule)
  },
  {
    path: 'medio-pago',
    loadChildren: () => import('./Paginas/medio-pago/medio-pago.module').then( m => m.MedioPagoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./Paginas/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'medicamentos',
    loadChildren: () => import('./Paginas/medicamentos/medicamentos.module').then( m => m.MedicamentosPageModule)
  },
  {
    path: 'cremas',
    loadChildren: () => import('./Paginas/cremas/cremas.module').then( m => m.CremasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
