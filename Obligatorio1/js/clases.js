
class carrera {
    constructor(nom, ape, edad, tel) {
        this.nombre = nom;
        this.apellido = ape;
        this.edad = edad;
        this.telefono = tel;
    }
    // El metodo toString() define como se muestra el objeto
    toString(){
        return this.nombre+" "+this.apellido+" ("+this.edad+")"
    }
}

class Agenda {
    constructor(){
        this.listaContactos = [];
    }
    agregarContacto(contacto){
        this.listaContactos.push(contacto);
    }
    darContactos(){
        return this.listaContactos;
    }
    existeTelefono(tele){
        let existe = false;
        for (let i=0; i<this.listaContactos.length; i++){
            if (this.listaContactos[i].telefono == tele){
                existe = true;
            }
        }
        return existe;
    }
}

/* clase 9/6 ordenar listas*/
DarCorredoresporNumero (){
    this.listaContactos.sort(function (a , b){
        return b.numero - a.numero;
    });
    return this.listaContactos;
}

DarCorredoresPorNombre (){
    this.listaContactos.sort(function (a , b){
        let dif = a.nombre.localCompare(b.nombre);
        if (dif ==0){
            dif = a.apellido.localCompare(b.apellido);
        }
        return dif
    });
    return this.listaContactos;
}