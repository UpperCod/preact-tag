# preact-tag

This small library(<520 bytes umd/gzip) allows to encapsulate the use of components based on **Preact** and **CustomElements**.

### JS
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

### HTML

```html
<preact-tag title="web component"></preact-tag>
```

By adding the static method `props` to the component created on the basis of `preact.Component`, you can recover and know the mutations of the properties associated with **CustomElement**.

## prefijo json-{prop}

Any property within the **CustomElement** can be parsed by `JSON.parse`, simply by prefixing the property with the prefix **json-**, then you can use it with `this.props.json<prop>`, by default preact-tag, applies camelCase format, to normalize the name of the property.

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



