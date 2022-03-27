<template>
    <div class="novosP" v-for="(item, id) in novProdutos" :key="id">
            <div class="card">
              <img class="displayed"
                :src="item.imageData"
              />
              <div class="card-body p-4">
                <div class="text-center">
                  <p class="fw-bolder">{{item.nomeProduto}}</p>
                  <p class="fw-bolder">{{item.preco}}</p>
                  
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto">Adicionar ao Carrinho</a>
                </div>
              </div>
            </div>
          </div>
</template>

<style scoped>
.novosP{
  width: 300px;
  height: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
}

img{
  width: 100px;
}

img.displayed {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

</style>
<script>
import axios from "axios";

export default {
    name: "get-request-async-await",

    data() {
        return{
            novProdutos: null,
        };
    },

    async created(){
        const response = await axios.get("https://amercearia-76bd2-default-rtdb.firebaseio.com/.json");
    
    this.novProdutos = response.data;
    },
};

</script>
