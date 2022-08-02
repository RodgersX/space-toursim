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
          <img
            id="moon-image"
            width="100%"
            class="image"
            :src="require('../assets/destination/image-moon.png')"
            alt=""
          />
          <img
            id="mars-image"
            width="100%"
            class="image"
            :src="require('../assets/destination/image-mars.png')"
            alt=""
          />
          <img
            id="europa-image"
            width="100%"
            class="image"
            :src="require('../assets/destination/image-europa.png')"
            alt=""
          />
          <img
            id="titan-image"
            width="100%"
            class="image"
            :src="require('../assets/destination/image-titan.png')"
            alt=""
          />
        </div>
        <div class="destination-details">
          <ul class="destination-list">
            <li
              id="defaultOpen"
              class="destination-name"
              @click="openDestination($event, 'MOON', 'moon-image')"
            >
              MOON
            </li>
            <li
              class="destination-name"
              @click="openDestination($event, 'MARS', 'mars-image')"
            >
              MARS
            </li>
            <li
              class="destination-name"
              @click="openDestination($event, 'EUROPA', 'europa-image')"
            >
              EUROPA
            </li>
            <li
              class="destination-name"
              @click="openDestination($event, 'TITAN', 'titan-image')"
            >
              TITAN
            </li>
          </ul>

          <div id="MOON" class="tabcontent">
            <p class="destination-name-bold">MOON</p>
            <p class="destination-info">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <v-divider color="grey" class="divider" />
            <div class="distance-time">
              <section class="below-divider">
                <p style="margin-bottom: 10px">AVG. DISTANCE</p>
                <p class="num-values">384,400 KM</p>
              </section>
              <section class="below-divider">
                <p style="margin-bottom: 10px">EST. TRAVEL TIME</p>
                <p class="num-values">3 DAYS</p>
              </section>
            </div>
          </div>

          <div id="MARS" class="tabcontent">
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

          <div id="EUROPA" class="tabcontent">
            <p class="destination-name-bold">EUROPA</p>
            <p class="destination-info">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
            <v-divider color="grey" class="divider" />
            <div class="distance-time">
              <section class="below-divider">
                <p style="margin-bottom: 10px">AVG. DISTANCE</p>
                <p class="num-values">628 MIL. KM</p>
              </section>
              <section class="below-divider">
                <p style="margin-bottom: 10px">EST. TRAVEL TIME</p>
                <p class="num-values">3 YEARS</p>
              </section>
            </div>
          </div>

          <div id="TITAN" class="tabcontent">
            <p class="destination-name-bold">TITAN</p>
            <p class="destination-info">
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
            <v-divider color="grey" class="divider" />
            <div class="distance-time">
              <section class="below-divider">
                <p style="margin-bottom: 10px">AVG. DISTANCE</p>
                <p class="num-values">1.6 BIL. KM</p>
              </section>
              <section class="below-divider">
                <p style="margin-bottom: 10px">EST. TRAVEL TIME</p>
                <p class="num-values">7 YEARS</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById("defaultOpen").click();
    document.getElementById("moon-image").style.display = "block";
  },

  methods: {
    openDestination(e, cityName, imageId) {
      var i, tabcontent, tablinks, destinationImages;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      destinationImages = document.getElementsByClassName("image");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        destinationImages[i].style.display = "none";
      }

      tablinks = document.getElementsByClassName("destination-name");
      for (var j = 0; j < tablinks.length; j++) {
        tablinks[j].className = tablinks[j].className.replace("active", "");
      }

      document.getElementById(cityName).style.display = "block";
      document.getElementById(imageId).style.display = "block";
      e.currentTarget.className += " active";
    },
  },
};
</script>

<style lang="scss" scoped>
#destination {
  background-image: url("../assets/destination/background-destination-desktop.jpg");
  background-size: cover;
  padding-top: 2.6rem;
  color: white;
}

main {
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;

  .image-preview {
    width: 400px;
    height: 400px;
  }

  .tabcontent,
  .image {
    display: none;
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
  #destination {
    height: 100vh;
  }
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
    padding-top: 0;
  }

  main {
    .destinations {
      padding-bottom: 2rem;
    }
    .image-preview {
      margin: 2rem auto;
    }
    .destinations {
      text-align: center;
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
    padding-top: 1rem;
  }

  main {
    .title {
      text-align: center;
      font-size: 16px;
      letter-spacing: 2.7px;
    }
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
