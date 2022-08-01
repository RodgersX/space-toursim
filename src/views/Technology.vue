<template>
  <div id="technology">
    <div id="header">
      <toolbar />
    </div>

    <main>
      <section class="title">
        <p><span>03</span> SPACE LAUNCH 101</p>
      </section>
      <div class="image-preview-mobile"></div>
      <section class="terminology">
        <div class="terminology-items">
          <div class="nav-circles">
            <div class="nav-circle active">1</div>
            <div class="nav-circle">2</div>
            <div class="nav-circle">3</div>
          </div>
          <div class="terminology-info">
            <p class="the-terminology">THE TERMINOLOGY...</p>
            <p class="terminology-title">LAUNCH VEHICLE</p>
            <p class="terminology-desc">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
        <div class="image-preview"></div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#technology {
  background-image: url("../assets/technology/background-technology-desktop.jpg");
  background-size: cover;
  color: white;
  padding-top: 2.6rem;
}

main {
  .title {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    letter-spacing: 4.72px;
    span {
      color: grey;
      font-weight: bold;
    }
  }

  .terminology {
    .nav-circle {
      border: 1px solid white;
      background-color: #0b0d17;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
    }

    .nav-circle.active {
      background-color: white;
      color: #0b0d17;
      border: none;
    }
    .the-terminology {
      font-family: "Barlow Condensed", sans-serif;
      font-size: 16px;
      letter-spacing: 2.7px;
    }
    .terminology-title {
      font-family: "Bellefair", serif;
      font-size: 56px;
    }
    .terminology-desc {
      font-family: "Barlow", sans-serif;
      font-size: 18px;
      line-height: 32px;
    }
  }
  .image-preview,
  .image-preview-mobile {
    //
    background-color: #0b0d17;
  }
}

@media screen and (min-width: 1200px) {
  #technology {
    height: 100vh;
  }
  main {
    width: 80%;
    margin: 0 auto;
    padding-top: 2rem;
  }

  .terminology {
    height: 80vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .terminology-items {
    width: 60%;
    display: flex;
    align-items: center;
    .nav-circles {
      margin-right: 2rem;
      .nav-circle {
        margin: 1.5rem 0;
      }
    }
  }

  .image-preview {
    width: 400px;
    height: 400px;
  }
  .image-preview-mobile {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  #technology {
    padding-top: 0;
    .terminology {
      padding-bottom: 3rem;
      text-align: center;
      width: 60%;
      margin: 0 auto;
    }
    .nav-circles {
      display: flex;
      justify-content: center;
      .nav-circle {
        margin: 2rem 10px;
      }
    }
    .image-preview {
      display: none;
    }
    .image-preview-mobile {
      display: block;
      width: 100%;
      height: 400px;
      margin: 2rem auto 2rem auto;
    }
  }
}

@media screen and (max-width: 900px) {
  #technology {
    padding-top: 1rem;
    .title {
      text-align: center;
      font-size: 16px;
      letter-spacing: 2.7px;
    }
    .terminology {
      padding-bottom: 3rem;
      width: 90%;
      .the-terminology {
        font-family: "Barlow Condensed", sans-serif;
        font-size: 14px;
        letter-spacing: 2.36px;
      }
      .terminology-title {
        font-family: "Bellefair", serif;
        font-size: 24px;
        margin-top: 1rem;
      }
      .terminology-desc {
        margin-top: 1rem;
        font-family: "Barlow", sans-serif;
        font-size: 15px;
        line-height: 25px;
      }
    }
    .image-preview-mobile {
      width: 100%;
      height: 300px;
      margin-top: 2rem;
    }
  }
}
</style>
