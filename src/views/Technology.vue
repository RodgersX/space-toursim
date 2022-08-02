<template>
  <div id="technology">
    <div id="header">
      <toolbar />
    </div>

    <main>
      <section class="title">
        <p><span>03</span> SPACE LAUNCH 101</p>
      </section>
      <div class="image-preview-mobile">
        <img
          id="launch-vehicle-mobile-image"
          width="100%"
          height="100%"
          class="image"
          :src="
            require('../assets/technology/image-launch-vehicle-landscape.jpg')
          "
          alt="launch-vehicle.png"
        />

        <img
          id="space-capsule-mobile-image"
          width="100%"
          height="100%"
          class="image"
          :src="
            require('../assets/technology/image-space-capsule-landscape.jpg')
          "
          alt="space-capsule.png"
        />

        <img
          id="spaceport-mobile-image"
          width="100%"
          height="100%"
          class="image"
          :src="require('../assets/technology/image-spaceport-landscape.jpg')"
          alt="spaceport.png"
        />
      </div>
      <section class="terminology">
        <div class="terminology-items">
          <div class="nav-circles">
            <div
              id="autoFocus"
              class="nav-circle"
              @click="
                showTerminology(
                  $event,
                  'launchvehicle',
                  'launch-vehicle-mobile-image',
                  'launch-vehicle-image'
                )
              "
            >
              1
            </div>
            <div
              class="nav-circle"
              @click="
                showTerminology(
                  $event,
                  'spaceport',
                  'spaceport-mobile-image',
                  'spaceport-image'
                )
              "
            >
              2
            </div>
            <div
              class="nav-circle"
              @click="
                showTerminology(
                  $event,
                  'spacecapsule',
                  'space-capsule-mobile-image',
                  'space-capsule-image'
                )
              "
            >
              3
            </div>
          </div>

          <div class="terminology-info">
            <p class="the-terminology">THE TERMINOLOGY...</p>
            <div id="launchvehicle" class="tabcontent">
              <p class="terminology-title">LAUNCH VEHICLE</p>
              <p class="terminology-desc">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>

            <div id="spaceport" class="tabcontent">
              <p class="terminology-title">SPACEPORT</p>
              <p class="terminology-desc">
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>

            <div id="spacecapsule" class="tabcontent">
              <p class="terminology-title">SPACE CAPSULE</p>
              <p class="terminology-desc">
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </div>
          </div>
        </div>
        <div class="image-preview">
          <img
            id="launch-vehicle-image"
            width="100%"
            height="100%"
            class="image-desktop"
            :src="
              require('../assets/technology/image-launch-vehicle-portrait.jpg')
            "
            alt="launch-vehicle.png"
          />

          <img
            id="space-capsule-image"
            width="100%"
            height="100%"
            class="image-desktop"
            :src="
              require('../assets/technology/image-space-capsule-portrait.jpg')
            "
            alt="space-capsule.png"
          />

          <img
            id="spaceport-image"
            width="100%"
            height="100%"
            class="image-desktop"
            :src="require('../assets/technology/image-spaceport-portrait.jpg')"
            alt="spaceport.png"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById("autoFocus").click();
    document.getElementById("launchvehicle").style.display = "block";
    document.getElementById("launch-vehicle-image").style.display = "block";
  },

  methods: {
    showTerminology(e, termName, termImage, termImageDesktop) {
      let i, tabcontent, tablinks, termImages, desktopImages;

      tabcontent = document.getElementsByClassName("tabcontent");
      termImages = document.getElementsByClassName("image");
      desktopImages = document.getElementsByClassName("image-desktop");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        termImages[i].style.display = "none";
        desktopImages[i].style.display = "none";
      }

      tablinks = document.getElementsByClassName("nav-circle");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
      }

      document.getElementById(termName).style.display = "block";
      document.getElementById(termImage).style.display = "block";
      document.getElementById(termImageDesktop).style.display = "block";

      e.currentTarget.className += " active";
    },
  },
};
</script>

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

  .image,
  .tabcontent {
    display: none;
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
    background-image: url("../assets/technology/image-launch-vehicle-portrait.jpg");
    background-size: cover;
  }
  .image-preview-mobile {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  #technology {
    background-image: url("../assets/technology/background-technology-tablet.jpg");
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
    background-image: url("../assets/technology/background-technology-mobile.jpg");
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
