export interface InputGastoProps {
  onSubmit: (gasto: {
    nombre: string;
    monto: number;
    categoria: string;
    fecha: string;
  }) => void;
}
