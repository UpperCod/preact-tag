# preact-tag

Esta pequeña librería (<1kbs) permite encapsular el uso de componentes a base de **Preact** y **CustomElements**.

```js
import {h,Component} from "preact";
import register from "preact-tag";

register(
   "preact-tag",
   class extends Component{
       static get props(){
           return ["title"];
       }
       render(props){
           <div>
               <h1>hello {props.title}</h1>
           </div>
       }
   }
);
```

Al añadir el método estático `props` al componente creado a base de `preact.Component`, ud podrá recuperar y conocer las mutaciones de las propiedades asociadas al **CustomElement**.

## prefijo json-{prop}

Cualquier propiedad dentro del **CustomElement** puede ser json, simplemente anteponiendo como nombre a dicha propiedad el prefijo **json-**, luego ud podrá hacer uso de esta mediante `this.props.json<prop>`, por defecto preact-tag, aplica el formato camelCase, para normalizar el nombre de la propiedad

```js
import {h,Component} from "preact";
import register from "preact-tag";

register(
   "preact-tag",
   class extends Component{
       static get props(){
           return ["json-list-users", "json-checked"];
       }
       render(props){
           <div>
               {props.jsonListUsers.map(({name})=><div>
                   <h1>{name}</h1> 
               </div>)}
               <input type="checkbox" checked={props.jsonChecked}/>  
           </div>
       }
   }
);
```