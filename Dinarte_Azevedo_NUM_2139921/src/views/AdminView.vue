<template>
  <div class="login">
    <section class="py-5">
      <div class="login-page">
        <div class="form">
          <h3>Area de Administrador</h3>
          <form class="login-form">
            <input type="text" v-model="email" placeholder="administrador" />
            <input type="password" v-model="password" placeholder="palavra-passe" />
            <button @click="validated()">Iniciar Sessão</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "AdminView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    validated() {
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.name
          })
          .then(() => {
            this.$router.push('/aProduto')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  },
};

</script>