/* Aca voy a agregar todos los tipos que necesite crear a mano de una libreria que no esta tipada. 
  si usariamos lodash para crear el numero aleatorio seria de la siguiente manera
*/

declare module "lodash" {
  export function random(lower: number, upper: number): number;
}