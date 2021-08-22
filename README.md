
# Prueba técnica 1

Desarrollo de la prueba técnica 1 en donde se consumió la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
Desde la cual, reenderizamos en nuestra página los post y comentarios que se proveen.


## Tiempo de prueba

Se tuvo un presupuesto inicial de las horas en las que se podía desarrollar la prueba, reflejadas en la siguiente tabla.

![Presupuesto inicial](https://res.cloudinary.com/slqpez/image/upload/v1629652730/EstimadoPT1_hu6uzu.png)

Después de haber concluído la prueba, se obtuvieron los siguientes tiempos aproximados.

![Tiempo final](https://res.cloudinary.com/slqpez/image/upload/v1629653102/tiempo-finalPT1_amucjp.png)



## Consideraciones

Se puede observar que aunque se aproximó al tiempo presupuestado, se presentaron desfases, especialmente en la actividad 2; la lógica del ordenamiento de los posts. Ya que después de mucho tiempo, no encontraba la forma de aplicar el sort() sobre los ID de los objetos, para que tomara en cuenta su valor de Unicode. Pero finalmente se pudo solucionar con el método localCompare().

También, en la actividad 4, se consideró un tiempo mayor, pero se resolvió de forma casi trivial.

Finalemente, aunque el diseño es muy sencillo, y el modo mobile se realizó fácil, me tomó más tiempo de lo esperado una pequeña parte de dicho diseño que consistía en una barra lateral que indicaba el desplazamiento de los comentarios. Ya que, no se tenía un calculo de la altura que se debía tomar en las pantallas de los dispostivos más pequeños; después de jugar con valores se pudo llegar a un resultado aceptable. Sin embargo considero que se pudo hacer de una mejor forma.


## Consideraciones 2

Se pensó en diseño con scroll para la lista de los comentarios, al suponer que se pueden agregar muchos más, y que a partir de los mismos se pueden generar más hilos. Por lo que, sin el scroll se tendría muy mala experiencia para el usuario cuando vuelva a navegar en la página.

### Despliegue

El despliegue funcional y visual de la prueba se puede encontrar en: [Despliegue](https://pt1-fidelio.vercel.app/).