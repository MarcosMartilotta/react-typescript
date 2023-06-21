/* Si necesito utilizar un sistema como google analitics etc, que actuan en el objeto window, debemos extender todos
  los tipos que hay en window. De esta manera podemos agregarlos y controlarlos para que sea mas mantenible
*/

type Options = {
  callback?: () => void
  props: Record<string, string | number | undefined>
}

interface Window {
  plausible: (event: 'add_fox' | 'remove_fox', options?: Options) => void;
}