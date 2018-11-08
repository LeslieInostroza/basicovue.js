// lo primero que se hace es instanciar vue
const app = new Vue({ // dentro de esta instancia se trabajara con vue, estamos llamando a toda la libreria
  // segundo, tenemos que detectar el id, del container
  //  con 'el:#app' le decimos que dentro de app, va hacer gestionado con vue, con # se llama al id  del div id=app, el detectac el id
  // para trabajar con los datos, se escribe 'el' y 'data', son propios de vue.
  // 'el', es para llamar al id, donde se va a coontener toda la gestion de vue.
  // 'data', contendra los datos.
  el:/* '#app' */ '#container',
  data:{
    titulo: 'Frutas',
    frutas:/* ['Frutillas', 'Naranjas', 'Arandanos'] */[
      {nombre:'Frutillas', cantidad: 10},
      {nombre:'Naranjas', cantidad: 0},
      {nombre:'Arandanos', cantidad: 15}
    ]
  }
})