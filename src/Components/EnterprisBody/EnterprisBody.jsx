import React from "react";
import tasks from './Assets/Img/tasks.jpeg'
import "./Assets/styles.css";

const EnterprisBody = () => {
  return (
    <div className="contained-EnterprisBody">
          <div className="EnterprisBody">
               <h2>PRUEBA DESARROLLADOR REACT JS</h2>

               <div className="item-img">
                                  <img
                                    src={tasks}
                                    alt="tasks"
                                  />
                            </div>
               
               <div>
               <p>Condiciones:</p>
                <ul>
                    <li>
                    Cuando le dé clic a cualquier botón, me debe mostrar una página con un
                    botón que diga “Finalizar tarea #X” (la X depende de la tarea), y cuando le
                    dé clic a ese botón, me debe llevar de nuevo a la página de las 6 tarjetas,
                    escondiendo el botón de la tarjeta que acabo de realizar.
                    </li>
                    <li>
                    Obligatoriamente debo comenzar por el paso #1, si le doy clic inicialmente a
                    otra tarea sin haber terminado la #1, me debe salir un mensaje que me
                    recuerde que debo finalizar la tarea #1 primero.
                    </li>
                    <li>
                    Si le doy clic a la tarea #3.2 sin haber terminado la #3.1, me debe salir un
                    mensaje que me recuerde que debo finalizar la tarea #3.1 primero.
                    </li>
                    <li>
                    Si le doy clic a la tarea #4.1 sin haber terminado la #3.2, me debe salir un
                    mensaje que me recuerde que debo finalizar la tarea #3.2 primero.
                    </li>
                    <li>
                    Si le doy clic a la tarea #5.2 sin haber terminado la #5.1, me debe salir un
                    mensaje que me recuerde que debo finalizar la tarea #5.1 primero.
                    </li>
                    <li>
                    El resto de tareas se pueden hacer en el orden que se quiera.
                    </li>
                  
                </ul>
               </div>
          </div>
    </div>
  );
};

export default EnterprisBody;
