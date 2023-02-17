import angular from '../assets/angular.png'
import astro from '../assets/astro.png'
import next from '../assets/next.png'
import nuxt from '../assets/nuxt.png'
import qwik from '../assets/qwik.png'
import react from '../assets/react.png'
import remix from '../assets/remix.png'
import solid from '../assets/solid.png'
import svelte from '../assets/svelte.png'
import vue from '../assets/vue.png'

const ONE = [
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

const TWO = [
  ...ONE,
  {
    id: 'svelte',
    name: 'svelte',
    img: svelte,
  },
  {
    id: 'remix',
    name: 'remix',
    img: remix,
  },
]

const THREE = [
  ...TWO,
  {
    id: 'next',
    name: 'next',
    img: next,
  },
  {
    id: 'nuxt',
    name: 'nuxt',
    img: nuxt,
  },
]

export const LEVEL_ONE = [...ONE].flatMap(image => [image, image]).sort(() => Math.random() - 0.5)

export const LEVEL_TWO = [...TWO].flatMap(image => [image, image]).sort(() => Math.random() - 0.5)

export const LEVEL_THREE = [...THREE]
  .flatMap(image => [image, image])
  .sort(() => Math.random() - 0.5)
