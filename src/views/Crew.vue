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
          <div class="crew-image-mobile">
            <img
              id="anousheh-mobile-image"
              width="100%"
              height="100%"
              class="image"
              :src="require('../assets/crew/image-anousheh-ansari.png')"
              alt="ansari.png"
            />
            <img
              id="mark-mobile-image"
              width="100%"
              height="100%"
              class="image"
              :src="require('../assets/crew/image-mark-shuttleworth.png')"
              alt="mark.png"
            />
            <img
              id="victor-mobile-image"
              width="100%"
              height="100%"
              class="image"
              :src="require('../assets/crew/image-victor-glover.png')"
              alt="glover.png"
            />
            <img
              id="douglas-mobile-image"
              width="100%"
              height="100%"
              class="image"
              :src="require('../assets/crew/image-douglas-hurley.png')"
              alt="hurley.png"
            />
          </div>
          <v-divider color="grey"></v-divider>

          <div class="progress-dots-mobile">
            <div
              id="autoFocus"
              class="circle"
              @click="openCrewMember($event, 'hurley', 'douglas-mobile-image')"
            ></div>
            <div
              class="circle"
              @click="
                openCrewMember($event, 'shuttleworth', 'mark-mobile-image')
              "
            ></div>
            <div
              class="circle"
              @click="openCrewMember($event, 'glover', 'victor-mobile-image')"
            ></div>
            <div
              class="circle"
              @click="openCrewMember($event, 'ansari', 'anousheh-mobile-image')"
            ></div>
          </div>
        </div>

        <div class="crew-information-div">
          <div id="hurley" class="tabcontent">
            <p class="crew-title">COMMANDER</p>
            <p class="crew-name">DOUGLAS HURLEY</p>
            <p class="crew-desc">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>

          <div id="shuttleworth" class="tabcontent">
            <p class="crew-title">MISSION SPECIALIST</p>
            <p class="crew-name">MARK SHUTTLEWORTH</p>
            <p class="crew-desc">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
          </div>

          <div id="glover" class="tabcontent">
            <p class="crew-title">PILOT</p>
            <p class="crew-name">VICTOR GLOVER</p>
            <p class="crew-desc">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>

          <div id="ansari" class="tabcontent">
            <p class="crew-title">FLIGHT ENGINEER</p>
            <p class="crew-name">ANOUSHEH ANSARI</p>
            <p class="crew-desc">
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
          </div>

          <section class="progress-dots">
            <div
              id="autoFocus"
              class="circle"
              @click="openCrewMember($event, 'hurley', 'douglas')"
            ></div>
            <div
              class="circle"
              @click="openCrewMember($event, 'shuttleworth', 'mark')"
            ></div>
            <div
              class="circle"
              @click="openCrewMember($event, 'glover', 'victor')"
            ></div>
            <div
              class="circle"
              @click="openCrewMember($event, 'ansari', 'anousheh')"
            ></div>
          </section>
        </div>

        <div class="image-preview-desktop">
          <img
            id="anousheh"
            width="100%"
            height="100%"
            class="image"
            :src="require('../assets/crew/image-anousheh-ansari.png')"
            alt="ansari.png"
          />
          <img
            id="mark"
            width="100%"
            height="100%"
            class="image"
            :src="require('../assets/crew/image-mark-shuttleworth.png')"
            alt="mark.png"
          />
          <img
            id="victor"
            width="100%"
            height="100%"
            class="image"
            :src="require('../assets/crew/image-victor-glover.png')"
            alt="glover.png"
          />
          <img
            id="douglas"
            width="100%"
            height="100%"
            class="image"
            :src="require('../assets/crew/image-douglas-hurley.png')"
            alt="hurley.png"
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
    document.getElementById("douglas").style.display = "block";
  },
  methods: {
    openCrewMember(e, crewName, imageId) {
      var i, tabcontent, tablinks, crewImages;

      // Get all elements with class="tabcontent" & class="image" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      crewImages = document.getElementsByClassName("image");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        crewImages[i].style.display = "none";
      }

      tablinks = document.getElementsByClassName("circle");
      for (var j = 0; j < tablinks.length; j++) {
        tablinks[j].className = tablinks[j].className.replace("active", "");
      }

      document.getElementById(crewName).style.display = "block";
      document.getElementById(imageId).style.display = "block";

      e.currentTarget.className += " active";
    },
  },
};
</script>

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

.tabcontent,
.image {
  display: none;
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
  #crew {
    background-image: url("../assets/crew/background-crew-tablet.jpg");
  }
  main {
    padding: 2rem 0;
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
    background-image: url("../assets/crew/background-crew-mobile.jpg");
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

  .v-divider {
    margin: 2rem 0;
  }
  .progress-dots-mobile {
    margin-top: 2rem;
  }
}
</style>
