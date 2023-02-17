<template>
    <div>
<h2>Home page</h2>
    <pre>
        export default {
            components: {
            },
            data(){
                return {
                    counter:0
                }
            },
            methods:{
                increment(){
                    this.counter++;
                }
            },
            computed:{
                doubleData(){
                    return this.counter*2
                }
            },
            watch:{
                counter(oldVal,newVal){
                    console.log("Old val",oldVal);
                    console.log("new val",newVal);
                }
            }
        };
        </pre>
  </div>
</template>

<script>

export default{
    data(){
        return {
            counter :0
        }
    },
    methods:{
        increament(){this.counter++}
        },
    computed:{
        doubleData(){
                    return this.counter*2
                }
    },
    watch:{
        counter(oldVal,newVal){
            console.log("oldVal",oldVal)
            console.log("newVal",newVal)
        }
    },
 
}
</script>
