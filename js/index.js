tinymce.init({
    selector: '#detalles-txt',
    height: 300,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

  const criminales=[]; 
  
    let seleccion= document.querySelector("#Ciudad-select");
    let opcion1=document.createElement("option");
    opcion1.innerText="Viña del Mar";
    let opcion2=document.createElement("option");
    opcion2.innerText="Quilpué";
    let opcion3=document.createElement("option");
    opcion3.innerText="Santiago";
    let opcion4=document.createElement("option");
    opcion4.innerText="Otro que no sea Santiago";
    seleccion.appendChild(opcion1);
    seleccion.appendChild(opcion2);
    seleccion.appendChild(opcion3);
    seleccion.appendChild(opcion4);  
   

  const cargartabla=()=>{
    
    seleccion.innerHTML=""
    let tbody=document.querySelector("#tbody-table");
    tbody.innerHTML=""
    for(let i=0; i<criminales.length;++i){//length es como el largo del arreglo.
        let p=criminales[i];
        let tr =document.createElement("tr");
        //4.por cada atributo generar un td de la tabla
        let Nombre=document.createElement("td");
        let Ciudad=document.createElement("td");
        let Detalle=document.createElement("td");
        let Gravedad=document.createElement("td");
        Nombre.innerText=p.nombre;
        Detalle.innerHTML=p.detalles;
        let caso=document.createElement("i");
        if ((p.caso<=3)){
           caso.classList.add("fas","fa-caret","text-success","fa-2x");
        }else if((p.caso>3) && (p.caso<=6)){
           caso.classList.add("fas","fa-exclamation-triangle","text-danger","fa-2x"); 
        }else if ((p.caso>6)|| (p.caso<=15)){
            caso.classList.add("fas","fa-radiaton-alt","text-warning","fa-2x");
        }else if((p.caso>15)){
            caso.classList.add("fas","fa-user-ninja","text-dark","fa-2x");
        }
        Gravedad.classList.add("text-center");
        Gravedad.appendChild(caso);
        tr.appendChild(Nombre);
        tr.appendChild(Ciudad); 
        tr.appendChild(seleccion); 
        tr.appendChild(Detalle);
        tr.appendChild(Gravedad);
        tbody.appendChild(tr);
    }
          
  };
  document.querySelector("#registrar-btn").addEventListener("click",()=>{
    let nombre= document.querySelector("#nombre-txt").value;
    let apellido = document.querySelector("#apellido-txt").value;
    let ciudad= document.querySelector("#Ciudad-select").value;
    let gravedad=document.querySelector("#crimenes-num").value;
   
    let detalles=tinymce.get("detalles-txt").getContent();
   
    let crimen={};
       
    crimen.nombre=nombre+" "+apellido;
    crimen.ciudad=ciudad;
    crimen.gravedad=gravedad;
    crimen.detalles=detalles;
    criminales.push(crimen);
    
    cargartabla();
    Swal.fire("Registro de criminal realizado");
  });