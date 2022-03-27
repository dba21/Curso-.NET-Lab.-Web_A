<template>
  <div class="login">
    <section class="py-5">
      <div class="login-page">
        <div class="form">
          <h3>Area de Cliente</h3>
          <form class="login-form">
            <input type="text" v-model="email" placeholder="email" />
            <input type="password" v-model="password" placeholder="palavra-passe" />
            <button @click="login()">Login</button>
            <p class="message">
              Ainda não tem conta?<router-link to="/registo">Registe-se</router-link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.name
          })
          .then(() => {
            this.$router.push('/') //depois de fazer login vai para a pagina home
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  },
};

// function myFunction(){
//     var checkBox = document.getElementById("myRemember");

//     var text = document.getElementById("text");

//     if(checkBox.checked == true){
//         text.style.display = "block";
//     }
//     else{
//         text.style.display = "none;"
//     }
// }
</script>