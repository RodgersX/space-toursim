<template>
  <div id="home">
    <header id="header">
      <toolbar />
    </header>

    <main>
      <section class="main-title">
        <p class="want-to">SO, YOU WANT TO TRAVEL TO</p>
        <p class="big-space">SPACE</p>
        <p class="small-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>

      <section class="explore-section">
        <button id="explore-btn" @click="$router.push('/dest')">EXPLORE</button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
#home {
  background-image: url("../assets/home/background-home-desktop.jpg");
  background-size: cover;
  padding-top: 2.6rem;
  color: white;
  height: 100vh;
}

#explore-btn {
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50%;
  color: black;
  font-family: "Bellefair", serif;
  font-size: 32px;
  letter-spacing: 2px;
}

main {
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding-top: 10rem;
}

.want-to {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  letter-spacing: 4.72px;
}

.big-space {
  font-family: "Bellefair", serif;
  font-size: 150px;
}

.small-text {
  font-family: "Barlow", sans-serif;
  font-size: 18px;
}

.main-title,
.explore-section {
  width: 50%;
}

.explore-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 1200px) {
  main {
    height: 70vh;
    margin-top: auto;
    align-items: center;
  }
}

@media only screen and (max-width: 1200px) {
  #home {
    background-image: url("../assets/home/background-home-tablet.jpg");
    background-size: cover;
    padding-top: 0;
  }
  main {
    display: block;
    padding-top: 5rem;
    height: 95vh;

    .main-title,
    .explore-section {
      width: 80%;
      margin: 0 auto;
      text-align: center;
    }

    .explore-section {
      margin-top: 5rem;
    }
  }
}

@media only screen and (max-width: 900px) {
  #home {
    background-image: url("../assets/home/background-home-mobile.jpg");
    height: 100%;
    padding-top: 1rem;
  }
  main {
    width: 100%;
  }
  .want-to {
    font-size: 16px;
  }

  .big-space {
    font-size: 80px;
  }

  .small-text {
    font-size: 15px;
    width: 100%;
  }

  #explore-btn {
    width: 160px;
    height: 160px;
    font-size: 20px;
    letter-spacing: 1.25px;
  }
}
</style>
