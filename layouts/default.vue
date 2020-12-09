<template>
  <div>
    <div class="container-fluid bg-primary pt-3 text-center">
      <h1 class="text-white ">CONTROL DE ALUMNOS</h1>
      <div class="p-3">
        <nuxt-link :to="{ name: 'index' }"
          ><button type="button" class="btn btn-outline-light">
            Inicio
          </button></nuxt-link
        >
        <nuxt-link :to="{ name: 'crear' }" 
          ><button type="button" class="btn btn-outline-light">
            Crear Alumno
          </button></nuxt-link
        >
      </div>
    </div>
    <div class="mt-5">
      <Nuxt />
    </div>
  </div>
</template>

<style></style>
