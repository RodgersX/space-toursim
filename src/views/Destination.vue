<template>
  <div id="destination">
    <div id="header">
      <toolbar />
    </div>

    <main>
      <section class="title">
        <p><span>01</span> PICK YOUR DESTINATION</p>
      </section>

      <section class="destinations">
        <div class="image-preview">
          <!-- hello world -->
        </div>
        <div class="destination-details">
          <ul class="destination-list">
            <li class="destination-name active">MOON</li>
            <li class="destination-name">MARS</li>
            <li class="destination-name">EUROPA</li>
            <li class="destination-name">TITAN</li>
          </ul>

          <p class="destination-name-bold">MARS</p>
          <p class="destination-info">
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
          <v-divider color="grey" class="divider" />
          <div class="distance-time">
            <section class="below-divider">
              <p style="margin-bottom: 10px">AVG. DISTANCE</p>
              <p class="num-values">225 MIL. KM</p>
            </section>
            <section class="below-divider">
              <p style="margin-bottom: 10px">EST. TRAVEL TIME</p>
              <p class="num-values">9 MONTHS</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#destination {
  background-image: url("../assets/destination/background-destination-desktop.jpg");
  background-size: cover;
  padding-top: 2.6rem;
  color: white;
  height: 100vh;
}

main {
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;

  .image-preview {
    background: #0b0d17;
    width: 400px;
    height: 400px;
  }

  .destination-name {
    display: inline-block;
    margin: 5px 1rem 10px 0;
    padding: 4px;
    font-family: "Barlow Condensed", sans-serif;
    letter-spacing: 2.7px;
    font-weight: bold;
    font-size: 16px;
    color: #d0d6f9;
  }

  .destination-name:hover,
  .destination-name.active {
    cursor: pointer;
    border-bottom: 2px solid white;
  }

  .title {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    letter-spacing: 4.72px;
    span {
      color: grey;
      font-weight: bold;
    }
  }

  .destination-name-bold {
    font-family: "Bellefair", serif;
    font-size: 100px;
    margin: 3rem 0;
  }

  .destination-info {
    font-family: "Barlow", sans-serif;
    font-size: 18px;
    color: #d0d6f9;
  }

  .divider {
    margin: 4rem 0 2rem 0;
  }

  .below-divider {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 14px;
    letter-spacing: 2.36px;
    margin-right: 4rem;
  }

  .num-values {
    font-family: "Bellefair", serif;
    font-size: 28px;
  }

  .distance-time {
    display: flex;
  }
}

@media only screen and (min-width: 1200px) {
  .destinations {
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
  }

  .destination-details {
    width: 50%;
  }
}

@media only screen and (max-width: 1200px) {
  #destination {
    background-image: url("../assets/destination/background-destination-tablet.jpg");
    background-size: cover;
    padding-top: 0;
  }

  main {
    .image-preview {
      margin: 2rem auto;
    }
    .destinations {
      text-align: center;
      width: 100%;
    }

    .title {
      font-size: 20px;
      letter-spacing: 3.38px;
    }

    .destination-name-bold {
      font-size: 80px;
    }

    .destination-info {
      font-size: 16px;
    }
    .distance-time {
      justify-content: center;
    }
  }
}

@media only screen and (max-width: 900px) {
  #destination {
    background-image: url("../assets/destination/background-destination-mobile.jpg");
    background-size: cover;
    padding-top: 1rem;
    height: 125vh;
  }

  main {
    .image-preview {
      width: 300px;
      height: 300px;
    }
    .below-divider {
      margin: 2.5rem 0;
    }
    .distance-time {
      display: block;
    }
  }
}
</style>
