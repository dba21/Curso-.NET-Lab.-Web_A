<template>
  <div class="admin">
    <section class="py-5 ">
      <div class="admin-page ">
        <div class="form-admin form">
          <form class="admin-form">
            <h3>Adicionar um produto</h3>
            <input type="text" v-model="nomeProduto" placeholder="Nome do Produto" />
            <input type="text" v-model="preco" placeholder="Preço" />
            <input type="url" v-model="image" placeholder="Adicionar link da imagem" />
            <button @click="guardar">Guardar</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
        nomeProduto: "",
        preco: "",
        image: "",
        imagemData: "",
    };
  },

  mounted(){

  },

  methods: {

    guardar(){
      axios
      .post("https://amercearia-76bd2-default-rtdb.firebaseio.com/.json",{
        nomeProduto: this.nomeProduto,
        preco: this.preco,
        imageData: this.image
      }
      )
      .then((response) => (this.articleId = response.data.id, console.log("res " + this.articleId)))
    },
  },
};

</script>