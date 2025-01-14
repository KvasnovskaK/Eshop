<template>
  <div class="home">
    <section class="hero">
      <h1>Vitajte v e-shope s fitness potrebami</h1>
      <p>
        Objavte široký sortiment fitness produktov pre váš aktívny životný štýl.
        Ponúkame výživové doplnky, fitness oblečenie, fitness príslušenstvo a mnoho ďalšieho.
      </p>
     
    </section>

    <section class="categories">
      <h2>Naše kategórie</h2>
      <div class="category-list">
        <div class="category-item">
          <RouterLink to="/supplements">
            <img src="/Img/v_doplnky.jpg" alt="Výživové doplnky" />
            <h3>Výživové doplnky</h3>
          </RouterLink>
        </div>
        <div class="category-item">
          <RouterLink to="/clothing">
            <img src="/Img/oblecenie.jpg" alt="Fitness oblečenie" />
            <h3>Fitness oblečenie</h3>
          </RouterLink>
        </div>
        <div class="category-item">
          <RouterLink to="/accessories">
            <img src="/Img/doplnky.jpg" alt="Fitness príslušenstvo" />
            <h3>Fitness príslušenstvo</h3>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

