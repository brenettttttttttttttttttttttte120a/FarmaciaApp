export interface Usuario {
  nombre: string;
  contraseña: string;
  tipo: string;
}

export interface UsuarioConIdo extends Usuario {
  id: number;
}
