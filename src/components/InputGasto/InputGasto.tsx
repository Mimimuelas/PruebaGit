// Si no quieres usar el archivo .types separado, puedes definirlo aquí arriba:
interface GastoFormdata {
    nombre: string;
    monto: number;
    categoria: string;
    fecha: string;
}

interface InputGastoProps {
    onSubmit: (gasto: GastoFormdata) => void;
}

// ... resto de tu componente InputGasto igual que antes ...