export type Rol = 'Admin' | 'Propietario' | 'Cliente';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: Rol;
}

export interface Propiedad {
  id: number;
  titulo: string;
  precio: number | string;
  ubicacion: string;
  imagen: string;
  estado: 'Disponible' | 'Rentado' | 'Vendido' | 'Pendiente';
  idPropietario: number;
}