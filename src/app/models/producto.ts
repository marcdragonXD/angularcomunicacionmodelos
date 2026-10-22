export class Producto{
    // LAS PROPIEDADES DEBEN SER PUBLICAS
    public nombre: string;
    public imagen: string;
    public precio: number;

    // TENDREMOS UN CONSTRUCTOR PARA ENVIAR LOS DATOS
    // AL CREAR EL MODELO
    constructor(name: string, image: string, price: number){
        this.nombre = name;
        this.imagen = image;
        this.precio = price;
    }
}