<template>
<section id="header">
    <a href="#"><img src="../assets/logo (1).png" class="logo" alt=""></a>

      <nav>
      <ul id="navbar" :class="{ 'active': showMenu }">
        <li>
          <router-link to="/" exact>Home</router-link>
        </li>
        <li>
          <router-link to="/productpage">Products</router-link>
        </li>
        <li>
          <router-link to="/about-us">About Us</router-link>
        </li>
        <li>
          <router-link to="/contact-form">Contact Us</router-link>
        </li>
            
        </ul>
    </nav>
    <div id="mobile">
        <i @click="toggleMenu" :class="showMenu ? 'fa-solid fa-times' : 'fa-solid fa-bars'"></i>
    </div>
</section>
<router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style>
.active a {
    color: #088178;
}

#header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;
    background: #E3E6F3;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;
    margin-top: -40px;
}

#navbar {
    display: flex;
    align-items: center;
    justify-content: center;
}

#navbar li {
    list-style: none;
    padding: 0 20px;
    position: relative;
    cursor: pointer;
}

#navbar li a {
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
    color: #252424;
    transition: 0.3s ease;
}

#navbar li a:hover,
#navbar li a.active {
    color: #088178;
}

#navbar li a.active::after,
#navbar li a:hover::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #088178;
    position: absolute;
    bottom: -4px;
    left: 20px;
}

#mobile {
    display: none;
    align-items: center;
}
#mobile i {
  font-size: 24px;
  cursor: pointer;
}

.active {
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 80px;
  right: 20px;
  background: #E3E6F3;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
}

@media (max-width: 768px) {
  #navbar {
    display: none;
  }

  #mobile {
    display: flex;
  }

  #navbar.active {
    display: flex;
  }

  #navbar li {
    padding: 10px 0;
  }
}

@media (max-width: 480px) {
  #header {
    padding: 10px 20px;
  }

  #navbar li a {
    font-size: 15px;
  }
}
#close {
    display: none;
}



</style>
