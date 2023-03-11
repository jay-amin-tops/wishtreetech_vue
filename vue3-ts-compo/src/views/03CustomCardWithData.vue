<template>
    {{msg_data}}
      <div class="card text-black">
          <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
            class="card-img-top cust-class" alt="Apple Computer" />
          <div class="card-body">
            <div class="text-center"> 
              <h5 class="card-title">{{cardtitle}}</h5>
              <p class="text-muted mb-4">Apple pro display XDR</p>
            </div>
            <div>
              <div class="d-flex justify-content-between py-1">
                <span>Pro Display XDR</span>
                <!-- <span>$5,999</span> -->
                <span>$5,999</span>
              </div>
              <div class="d-flex justify-content-between py-1">
                <span>Pro stand</span><span>$999</span>
              </div>
              <div class="d-flex justify-content-between py-1">
                <span>Vesa Mount Adapter</span><span>$199</span>
              </div>
            </div>
            <div class="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>$7,197.00</span>
            </div>
            <div class="text-center">
              <button class="btn">Add to cart</button>
            </div>
          </div>
        </div>  
  <br>
  <br>
  <br>
  <br>

</template>

<script>
export default {
  name: 'CustomCard',
  props: {
    msg: String,
    cardtitle:String
  },
  data(){
    return{
      msg_data:"Somehting"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
}
.container{
  width:1100px;
  margin:0 auto;
}
.d-flex{
  display:flex;
}

.card{
  padding:5px 9px;
  box-shadow: 3px 3px 15px grey;
  border-radius:5px
}
.card-title{
  font-size:20px
}
.text-muted {
  color:grey;
  font-size:13px
}
.py-1{
  padding:.4em 0px;
}
/* .card-body *{
  padding:5px 0px;
} */
button{
  padding:10px;
  display:inline-block;
  width:100px;
  transition: all .5s;
  /* border-radius:30px 0px 30px 0px */
}
button:hover{
  border-radius:30px 0px 30px 0px
}
img{
  width:100%;
  margin:auto;
}
.card-img-top{
  width:200px;
  object-fit: contain;
  display:block !important;

}
.justify-content-between{
  /* justify-content: space-evenly; */
  /* justify-content: space-around; */
  justify-content: space-between;
}
.text-center{
  text-align:center ;
}

.mt-4{
  margin-top:2em
}
.cust-class{
  display:inline-block
}
</style>
