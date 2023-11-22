# trabajoUpload

### Para ayudar a la gestión, la interfaz que desarrolla Nathan es como sigue:###


- Debe mostrarse un menú que permita agregar nuevos sujetos de investigación, así como un botón que permita, rápidamente, hacer desaparecer toda la información en pantalla y sustituirla por un bonito fondo de pantalla de LakeView en caso de que se acerque alguien que no deba ver la información, y volver a mostrar la información al volver a pulsar el botón.

- El listado de sujetos debe mostrar la foto del sujeto, con un borde verde si es un "descargado" y un borde rojo si es un humano vivo. Así mismo, debe aparecer el nombre del sujeto, en verde si es un posible candidato, en naranja si si sabe que ha colaborado en el delito, y en rojo si se sabe que ha sido uno de los perpetradores.

- Al añadir un sujeto o modificar uno ya existente a partir del listado, desaparecerá el listado y se mostrará un formulario con los siguientes datos: nombre, tipo (cargado o vivo), donde vive, desde cuando fue descargado (sólo si es un descargado), posible culpabilidad (posible cooperador, cooperador o delincuente), una url con la imagen del sujeto si lo hay (si no, en el listado aparecerá una imagen indicativa de que no hay foto), y un campo de comentarios. Al guardar, volverá a aparecer el listado, dejando de verse el formulario. Los datos deben estar debidamente validados y se deben almacenar en el navegador usando localStorage. No se permiten ventanas emergentes para visualizar el formulario.

- Debe existir un registro ya cargado, el de David Choak, que es considerado el líder de la banda. Todos los demás datos podrán agregarse más tarde.

