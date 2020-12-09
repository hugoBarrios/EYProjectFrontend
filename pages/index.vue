<template>
  <div class="container">
    <h3 class="text-center">Listado de alumnos</h3>
    <div>
      <table class="table table-striped">
        <thead class="thead-dark ">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Nivel Inicial</th>
            <th scope="col">Nivel Actual</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in studentsArray" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ student.Name }}</td>
            <td>{{ student.Age }}</td>
            <td>{{ student.InitialLevel }}</td>
            <td>{{ student.CurrentLevel }}</td>
            {{student.ID}}
            <b-button class="mt-1" variant="danger" @click="deleteStudent(student.ID)">Eliminar</b-button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "index",
  data() {
    return {
      students: []
    };
  },
  created() {
    this.fetchAllData();
  },
  methods: {
    ...mapActions(["fetchAllData", "deleteStudent"])
  },
  computed: mapState(["studentsArray"])
};
</script>

<style></style>
