<template>
  <div id="crew">
    <div id="header">
      <toolbar />
    </div>

    <main>
      <div class="info-div">
        <section class="title">
          <p><span>02</span> MEET YOUR CREW</p>
        </section>

        <section class="display-mobile">
          <section class="crew-image-mobile"></section>

          <v-divider color="grey"></v-divider>

          <section class="progress-dots-mobile">
            <div class="circle active"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </section>
        </section>

        <section class="crew-file">
          <p class="crew-title">COMMANDER</p>
          <p class="crew-name">DOUGLAS HURLEY</p>
          <p class="crew-desc">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </section>

        <section class="progress-dots">
          <div class="circle active"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </section>
      </div>

      <section class="crew-image-preview"></section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#crew {
  background-image: url("../assets/crew/background-crew-desktop.jpg");
  background-size: cover;
  color: white;
  padding-top: 2.6rem;
}

main {
  margin: 2rem 0 0 10rem;

  .title {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    letter-spacing: 4.72px;
    margin-bottom: 6rem;
    span {
      color: grey;
      font-weight: bold;
    }
  }
  .crew-title {
    font-family: "Bellefair", serifdiv;
    font-size: 32px;
  }

  .crew-name {
    font-family: "Bellefair", serif;
    font-size: 56px;
    margin-top: 1rem;
  }

  .crew-desc {
    font-family: "Barlow", sans-serif;
    font-size: 18px;
    margin: 3rem 0;
  }

  .progress-dots,
  .progress-dots-mobile {
    .circle {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: inline-block;
      margin: 0 16px 0 0;
      background: rgb(92, 91, 91);
    }

    .circle.active {
      background: white;
    }
  }

  .progress-dots-mobile {
    display: none;
  }

  .crew-image-preview,
  .crew-image-mobile {
    background: #0b0d17;
  }

  .crew-image-preview {
    width: 400px;
    height: 400px;
  }

  .crew-image-mobile {
    margin: 1rem auto 3rem auto;
    width: 300px;
    height: 300px;
  }

  .display-mobile {
    width: 80%;
    margin: 3rem auto;
  }
}

@media screen and (min-width: 1200px) {
  main {
    display: flex;
    height: 72vh;
    margin-top: 10rem;
    .info-div {
      width: 50%;
    }

    .crew-image-preview {
      margin-top: 2rem;
      margin-left: 2rem;
    }
  }
}

// tablet display
@media only screen and (max-width: 1200px) {
  main {
    margin: 0;
    padding-bottom: 1rem;
    .title {
      margin: 2rem 0 0 1rem;
    }

    .crew-file {
      width: 70%;
      margin: 2rem auto 0 auto;
    }

    .crew-file,
    .progress-dots {
      text-align: center;
    }

    .crew-image-preview {
      margin: 2rem auto 0 auto;
    }
  }
}

@media only screen and (min-width: 900px) {
  main {
    .display-mobile {
      display: none;
    }

    .progress-dots-mobile {
      display: none;
    }
  }
}

// mobile display
@media only screen and (max-width: 900px) {
  main {
    .crew-image-preview {
      display: none;
    }

    .progress-dots {
      display: none;
    }

    .progress-dots-mobile {
      display: block;
      width: 50%;
      text-align: center;
      margin: 2rem auto;
    }
  }
}
</style>
