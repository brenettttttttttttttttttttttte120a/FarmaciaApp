export interface Producto {
  categoria: String,
  marca : String,
  nombre : String,
}
export interface ProductoId extends Producto{
id: number;
}

export interface ProductoParcial extends Partial<Producto>{

}

