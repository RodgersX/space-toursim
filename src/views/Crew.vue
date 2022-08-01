<template>
  <div id="crew">
    <div id="header">
      <toolbar />
    </div>

    <main>
      <section class="title">
        <p><span>02</span> MEET YOUR CREW</p>
      </section>

      <section class="information-section">
        <div class="crew-info-mobile">
          <div class="crew-image-mobile"></div>
          <v-divider color="grey"></v-divider>

          <div class="progress-dots-mobile">
            <div class="circle active"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>

        <div class="crew-information-div">
          <p class="crew-title">COMMANDER</p>
          <p class="crew-name">DOUGLAS HURLEY</p>
          <p class="crew-desc">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
          <section class="progress-dots">
            <div class="circle active"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </section>
        </div>

        <div class="image-preview-desktop"></div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#crew {
  background-image: url("../assets/crew/background-crew-desktop.jpg");
  background-size: cover;
  color: white;
}
.progress-dots,
.progress-dots-mobile {
  .circle {
    width: 20px;
    height: 20px;
    background: rgb(88, 88, 88);
    border-radius: 50%;
    display: inline-block;
    margin: 0 6px;
  }
  .circle.active {
    background: white;
  }
}

.image-preview-desktop,
.crew-image-mobile {
  background: #0b0d17;
}

.image-preview-desktop {
  width: 400px;
  height: 400px;
}

.title {
  font-family: "Barlow Condensed", sans-serif;
  span {
    color: grey;
    font-weight: bold;
  }
}

.crew-title {
  font-family: "Bellefair", serif;
}

.crew-name {
  font-family: "Bellefair", serif;
  margin-top: 1rem;
}

.crew-desc {
  font-family: "Barlow", sans-serif;
  margin: 2rem 0 4rem 0;
}

@media screen and (min-width: 1200px) {
  #crew {
    padding-top: 2.6rem;
    height: 100vh;
    main {
      padding-top: 1rem;
      width: 80%;
      margin: 0 auto;
      .crew-information-div {
        width: 60%;
        margin-right: 5rem;
      }
      .title {
        font-size: 28px;
        letter-spacing: 4.72px;
      }
      .crew-title {
        font-size: 32px;
      }
      .crew-name {
        font-size: 56px;
      }

      .crew-desc {
        font-size: 18px;
        line-height: 32px;
      }
      .crew-info-mobile {
        display: none;
      }

      .information-section {
        height: 70vh;
        display: flex;
        align-items: center;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  main {
    padding: 1rem 0;
    .title {
      font-size: 20px;
      letter-spacing: 3.38px;
    }
    .information-section {
      width: 70%;
      margin: auto;
      text-align: center;
    }
    .crew-info-mobile {
      display: none;
    }
    .image-preview-desktop {
      margin: 3rem auto;
    }
    .crew-title {
      font-size: 24px;
      margin-top: 2rem;
    }
    .crew-name {
      font-size: 40px;
    }
    .crew-desc {
      font-size: 16px;
      line-height: 28px;
    }
  }
}

@media screen and (max-width: 900px) {
  #crew {
    padding-top: 1rem;
  }
  main {
    .title {
      text-align: center;
      font-size: 16px;
      letter-spacing: 2.7px;
    }

    .information-section {
      width: 90%;
    }
    .crew-info-mobile {
      display: block;
    }
  }
  .image-preview-desktop,
  .progress-dots {
    display: none;
  }
  .crew-image-mobile {
    width: 300px;
    height: 300px;
    margin: 2rem auto 0 auto;
  }
  .crew-title {
    font-size: 16px;
    margin-top: 2rem;
  }
  .crew-name {
    font-size: 24px;
  }

  .crew-desc {
    font-size: 15px;
    line-height: 25px;
  }
  .v-divider {
    margin: 2rem 0;
  }
  .progress-dots-mobile {
    margin-top: 2rem;
  }
}
</style>
