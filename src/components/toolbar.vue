<template>
  <div id="toolbar">
    <!-- web logo -->
    <div id="logo" @click="$router.push('/')">
      <img :src="require('../assets/shared/logo.svg')" alt="" />
    </div>

    <div class="divider"></div>

    <v-spacer />

    <!-- desktop and tablet menu -->
    <div id="nav">
      <router-link tag="li" to="/" exact-active-class="active">
        <span class="nav_num">00</span>
        HOME
      </router-link>
      <router-link tag="li" to="/dest" active-class="active">
        <span class="nav_num">01</span> DESTINATION
      </router-link>
      <router-link tag="li" to="/crew" active-class="active">
        <span class="nav_num">02</span> CREW
      </router-link>
      <router-link tag="li" to="/tech" active-class="active">
        <span class="nav_num">03</span> TECHNOLOGY
      </router-link>
    </div>

    <!-- hamburger menu -->
    <v-app-bar-nav-icon id="mobile-menu" @click="openNav"></v-app-bar-nav-icon>

    <div id="sidenav">
      <button icon class="closebtn" color="white" @click="closeNav">
        &times;
      </button>

      <div style="margin-top: 5rem">
        <router-link tag="a" to="/" exact-active-class="active">
          <span class="nav-num-mobile">00</span>
          HOME
        </router-link>
        <router-link tag="a" to="/dest" active-class="active">
          <span class="nav-num-mobile">01</span>
          DESTINATION
        </router-link>
        <router-link tag="a" to="/crew" active-class="active">
          <span class="nav-num-mobile">02</span>
          CREW
        </router-link>
        <router-link tag="a" to="/tech" active-class="active">
          <span class="nav-num-mobile">03</span>
          TECHNOLOGY
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openNav() {
      document.getElementById("sidenav").style.width = "80%";
    },
    closeNav() {
      document.getElementById("sidenav").style.width = "0";
    },
  },
};
</script>

<style lang="scss" scoped>
#toolbar {
  display: flex;
  align-items: center;
  margin-left: 3rem;
  color: white;
}

.divider {
  position: relative;
  left: 10%;
  width: 40%;
  border-bottom: 1px solid rgb(172, 169, 169);
}

#nav {
  width: 50%;
  background-color: rgba(166, 166, 166, 0.4);
  padding-left: 2rem;
  li {
    display: inline-block;
    padding: 2rem 10px;
    margin: 0 10px;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    cursor: pointer;
    span {
      font-weight: bold;
    }
  }

  li:hover,
  li.active {
    border-bottom: 2px solid white;
  }
}

#sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: black;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  letter-spacing: 2.7px;
}
#sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 20%;
  right: 25px;
  font-size: 60px;
  margin-left: 50px;
}

#sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  font-size: 16px;
  margin: 1rem 0;
  display: block;
  transition: 0.3s;
}

#sidenav a:hover,
#sidenav a.active {
  background: rgb(82, 81, 81);
}

#mobile-menu {
  display: none;
}

@media only screen and (max-width: 1200px) {
  .nav_num {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  #toolbar {
    margin: 0 10px;
  }

  #mobile-menu {
    display: block;
    color: white;
  }

  #nav,
  .divider {
    display: none;
  }
}
</style>
