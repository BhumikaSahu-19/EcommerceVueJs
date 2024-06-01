<template>
  <footer class="section-p1">
      <div class="col">
          <img class="logo" src="../assets/logo (1).png" alt="">
          <h4>Contact</h4>
          <p><strong>Address:</strong> 562 WEllington Road , Street 32 , San Francisco</p>
          <p><strong>Phone :</strong> +01 2222 365 /(+91) 01234567889</p>
          <p><strong>Hours :</strong> 10:00 - 18:00 Mon-Sat</p>
          <div class="follow">
              <h4>Foolow us</h4>
              <div class="icon">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-pinterest-p"></i>
                  <i class="fa-brands fa-youtube"></i>
              </div>
          </div>
      </div>
      <div class="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Condition</a>
          <a href="#">Contact Us</a>
      </div>

      <div class="col">
          <h4>About</h4>
          <a href="#">Account</a>
          <a href="#">Sign in</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track my Order</a>
          <a href="#">Help</a>
      </div>

      <div class="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Plays</p>
          <div class="row">
              <img src="../assets/App/app.jpg" alt="">
              <img src="../assets/App/play.jpg" alt="">
          </div>
          <p>Secured Payment Gateways</p>
          <img src="../assets/App/pay.png" alt="">
      </div>

      <div class="copyright">
          <p>@2024 Tech2 etc - HTML CSS Ecommerce Template</p>
      </div>
  </footer>
</template>

<script>
  export default{
      name:'FooterSec'
  } 
</script>

<style scoped>
footer{
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
  margin-top: 40px;

}

footer .col{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

footer .logo
{
 margin-bottom: 30px;
}

footer h4
{
  font-size: 14px;
  padding-bottom: 20px;
}
footer p
{
  font-size: 13px;
  margin:0 0 8px 0;
}
footer a
{
  font-size: 13px;
  text-decoration: none;
  margin-bottom: 10px;
  color: #222;
}
footer .follow
{
  margin-top: 20px;
}
footer .follow i
{
  color: #465b52;
  padding-right: 4px;
  cursor: pointer;
}
footer .install .row img
{
  border: 1px solid #088178;
  border-radius: 6px;
  margin: 10px 0 10px 0;
}
footer .install img
{
  margin: 10px 0 15px 0;
}
footer .follow i:hover,
footer a:hover{
  color:#088178;
}
footer .copyright
{
  width: 100%;
  text-align: center;
}
</style>