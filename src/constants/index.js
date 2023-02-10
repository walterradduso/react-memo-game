import angular from '../assets/angular.png'
import astro from '../assets/astro.png'
import qwik from '../assets/qwik.png'
import react from '../assets/react.png'
import solid from '../assets/solid.png'
import vue from '../assets/vue.png'

export const FRONT_IMAGES = [
  {
    id: 'angular',
    name: 'angular',
    img: angular,
  },
  {
    id: 'astro',
    name: 'astro',
    img: astro,
  },
  {
    id: 'qwik',
    name: 'qwik',
    img: qwik,
  },
  {
    id: 'react',
    name: 'react',
    img: react,
  },
  {
    id: 'solid',
    name: 'solid',
    img: solid,
  },
  {
    id: 'vue',
    name: 'vue',
    img: vue,
  },
]
  .flatMap(image => [image, image])
  .sort(() => Math.random() - 0.5)
