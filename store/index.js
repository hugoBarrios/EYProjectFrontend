
export const state = () => ({
  studentsArray: []
});

export const mutations = {
    setStudents(state, payload){
        state.studentsArray = payload
    }
};

export const actions = {
    async fetchAllData ({ commit }) {
        const data = await this.$http.$get('http://localhost:3300/api/v1/student')
        commit('setStudents', data)
      },
    async addStudent(context, palabra){
        const _data = {
            "Name": palabra.name,
            "Age": palabra.age,
            "InitialLevel": palabra.initialLevel,
            "CurrentLevel": palabra.currentLevel,
        }
        const data = await this.$http.$post('http://localhost:3300/api/v1/student', _data)
        this.$router.push('/')
        console.log(data);
        console.log(context)
    },
    async deleteStudent(context, id){
        await this.$http.$delete(`http://localhost:3300/api/v1/student/${id}`)
        window.location.reload(true)
        console.log(context)
    }
};
