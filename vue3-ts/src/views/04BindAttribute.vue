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
              <button class="btnCSS">Add to cart</button>
            </div>
            <br>
            <button class="btnCSS">Add to cart</button>
            <br>
            <button class="btn-class">Add to cart</button>
            <br>
            <button class={{btnCSS}}>Add to cart {{btnCSS}}</button>
            <br>
            <button v-bind:class="btnCSS">v-bind:class="btnCSS"</button>
            <br>
            <button :class="btnCSS">Add to cart :class="btnCSS"</button>
            <br>
            <button :class="buttonClasses" v-on:click="toggle">v-on:click</button>
            <br>
            <button class="active? 'btn-class':'text-red' " @click="toggle">@click</button>
            <br>
            <button :class="active? 'btn-class':'text-red' " @click="toggle">@click</button>
            <br>
            <button :class="active? btnClass:'text-red' " @click="toggle">@click</button>
            <br> 
            <button :class="active? btnClass:'text-red' " @click="reverseMessage">{{message}}</button>
            <br> 
            {{message}}
            <button @click="message += '!'">Append "!"</button>  
            <br> 
            
            <span :title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>

    <p :class="{ red: isRed }" @click="toggleRed">
    This should be red... but click me to toggle it.
  </p>

  <!-- style bindings also support object and arrays -->
  <p :style="{ color }" @click="toggleColor">
    This should be green, and should toggle between green and blue on click.
  </p>
          </div>
        </div>  

        <br>
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
      msg_data:"Somehting",
      btnCSS:'btn-class',
      active:true,
      message: 'Hello World!',
      isRed: true,
      color: 'green'
    }
  },
  methods:{
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    },
    toggle(){
      console.log("called");
      this.btnCSS="text-red"
      this.active = !this.active
    },
    toggleRed() {
      this.isRed = !this.isRed
    },
    toggleColor() {
      this.color = this.color === 'green' ? 'blue' : 'green'
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
.btn-class{
  background-color:#113b33;
  margin:5px;
  padding:5px 15px;
  color:white;
}
.container{
  width:1100px;
  margin:0 auto;
}
.red {
  color: red;
}
.d-flex{
  display:flex;
}
.text-red{
  background-color:red;
  margin:5px;
  padding:5px 15px;
  color:white;
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
  width:auto;
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
