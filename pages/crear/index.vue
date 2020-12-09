<template>
  <div class="container">
    <h3 class="text-center">Agregar alumnos</h3>
    <form  @submit.prevent="addStudent({name,age,initialLevel,currentLevel})">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="age">Edad</label>
        <input
          type="number"
          class="form-control"
          id="age"
          v-model="age"
        />
      </div>
      <div class="form-group">
        <label for="initLevel">Nivel Inicial</label>
        <input
          type="text"
          class="form-control"
          id="initLevel"
          v-model="initialLevel"
        />
      </div>
      <button type="submit" class="btn btn-primary">Agregar</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "crear",
  data() {
    return {
      name: "",
      age: 0,
      initialLevel: "",
      currentLevel: ""
    };
  },
  created() {

  },
  methods: {
    ...mapActions(["addStudent"])
  }
};
</script>

<style></style>
