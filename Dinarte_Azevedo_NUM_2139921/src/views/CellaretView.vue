<template>
  <div class="cellaret">
    <div class="hContainerG">
      <div class="text-center">
        <h1 class="display-4 fw-bolder">Os Melhores Produtos</h1>
        <p class="lead fw-normal mb-0">Da Ilha da Madeira</p>
      </div>
    </div>
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="
            row
            gx-4 gx-lg-5
            row-cols-2 row-cols-md-3 row-cols-xl-4
            justify-content-center
          "
        >
          <div class="col mb-5">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="../assets/VinhoMadeiraBlandys.jpg"
              />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Vinho Madeira Blandys 5 Anos</h5>
                  10.00€
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">Detalhes</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <img class="card-img-top" src="../assets/Justino.jpg" />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Produto</h5>
                  15.00€
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">Detalhes</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="../assets/HenriquesHenriques3Anos.jpg"
              />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Henriques & Henriques</h5>
                  <p class="fw-bolder">Promoção</p>
                  <div
                    class="
                      d-flex
                      justify-content-center
                      small
                      text-warning
                      mb-2
                    "
                  >
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  <span class="text-muted text-decoration-line-through"
                    >20.00€</span
                  >
                  18.00€
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#"
                    >Adicionar ao Carrinho</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="../assets/Justinos10AnosSercial.jpg"
              />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Justinos 10 Anos Sercial</h5>
                  <div
                    class="
                      d-flex
                      justify-content-center
                      small
                      text-warning
                      mb-2
                    "
                  >
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  40.00€
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#"
                    >Adicionar ao Carrinho</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CellaretView",
};
</script>