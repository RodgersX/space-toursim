<template>
  <div id="toolbar">
    <!-- web logo -->
    <div id="logo">
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
    <v-app-bar-nav-icon id="mobile-menu"></v-app-bar-nav-icon>
  </div>
</template>

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

#mobile-menu {
  display: none;
}

@media only screen and (max-width: 1200px) {
  .nav_num {
    display: none;
  }
}

@media only screen and (max-width: 900px) {
  #mobile-menu {
    display: block;
    color: white;
    margin-right: 15px;
  }

  #nav,
  .divider {
    display: none;
  }
}
</style>
