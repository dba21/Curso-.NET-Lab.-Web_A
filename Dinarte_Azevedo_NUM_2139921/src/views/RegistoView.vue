<template>
  <div class="registo">
    <section class="py-5">
      <div class="login-page">
        <div class="form">
          <div class="register-form">
            <h3>Criar Conta</h3>
            <input type="text" placeholder="email" v-model="email" />
            <input type="password" placeholder="palavra-passe" v-model="password"/>
            <input type="text" placeholder="utilizador" />
            <button @click="register()">Novo Registo</button>
            <p class="message">
              Já tem conta?<router-link to="/login">Login</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>


import firebase from "firebase";
export default {

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.name
          })
          .then(() => {
            this.$router.push('/login')
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
