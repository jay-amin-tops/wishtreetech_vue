<script setup lang="ts">
import { ref,reactive,toRefs,computed,watch } from "vue";
        const counter:Number = ref (0)
        const user = ref ({
            name : "Jay",
            ange : 32
        })
        const userReactive = reactive ({
            name : "Jay",
            ange : 32
        })
        const forWrapptoRef = reactive ({
            username : "Jay",
            ange : 32,
            count : 0,
            counterData : 0
        })
        const dataProps = toRefs(forWrapptoRef)
        
        // we use ref thats why we are not able to access counter directly START
            // setTimeout(() => {
            //     counter++
            // }, 2000);
        // we use ref thats why we are not able to access counter directly END

        setTimeout(() => {
            counter.value++,
            user.value.name="Change",
            userReactive.name ="Testing",
            forWrapptoRef.username = "to ref Change" 
        }, 2000);
        // Methods
        
        // simple Js function START
        function addNumber() {
            console.log("called");
            forWrapptoRef.count++
            forWrapptoRef.counterData++
        }
        // simple Js function END
        

        // computed START
        const doubleCounterData = computed(()=>{
            return forWrapptoRef.count * 2
        })
        // computed END

        // watch START
        // if we apply watch directly on reactive object it will not work because it not reference
        // watch(forWrapptoRef.counterData,(oldVal,newVal)=>{
        // watch(forWrapptoRef.counterData,(oldVal,newVal)=>{
        //     console.log("Old val",oldVal);
        //     console.log("new val",newVal);
        //     if (newVal === 5) {
        //         forWrapptoRef.counterData = 0
        //     }
        // })

        // thats why instead of passing reference from return we create it inside setup we needs to convert reactive into tpRefs first
 
        watch(dataProps.count,(oldVal,newVal)=>{
            console.log("Old val",oldVal);
            console.log("new val",newVal);
            if (newVal === 5) {
                forWrapptoRef.count = 0
            }
        })
       
</script>


<template>
    <div>
        <p>coposition not use this keyword</p>
        <ul class="list-disc">
            <li>
                <p>definded counter as ref so we are not able to make changes directly in counter so we have to use it like counter.value </p>

            </li>
            <li>
                <p>Earlier we are able to make Changes in ref data if its single in this example we have an object of user data and we want to make changes on it that time ref would not able to perform that time we need reactive concepts</p>
            </li>
        </ul>

        {{ counter }}
        <h3 class="text-2xl">Ref declaration</h3>
        <pre>
            const counter = ref (0)
            const user = ref ({
                name : "Jay",
                ange : 32
            })
        </pre>
        <h3 class="text-2xl">Access Ref data using &#123;&#123; &#125;&#125; </h3>
        Code
        <pre>
            &#123;&#123; user.name &#125;&#125;
        </pre>
        output: 
        <pre>
            {{ user.name }}
        </pre>
        <h3 class="text-2xl">Reactive Object Declaration</h3>
        <pre>
            const userReactive = reactive ({
                name : "Jay",
                ange : 32
            })
        </pre>
        output: 
        <pre>
            {{ userReactive.name }}
        </pre>
        <h3 class="text-2xl">toRefs</h3>
        <p>if we pass reactive data by any variable or object that it will not update like in this example we are created <b>userReactive</b> as reactive data and return its object in UserName it will not change its value so solving this problem we are using <b>toRef</b> </p> 
        <p>After Wrapped with ...toRef(forWrapptoRef) we can able to access object directlity like in user object name &#123;&#123; name &#125;&#125;</p>
         {{forWrapptoRef.username}}
         
         
         <h3 class="text-2xl">Calling Method</h3>
         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="addNumber">Click</button>
         <p>Counter Data From toRefs : {{dataProps.counterData}}</p>
         <h3 class="text-2xl">Computed</h3>
         <p>Counter Data From toRefs : {{doubleCounterData}}</p>
         <p>Counter Data From toRefs : {{forWrapptoRef.count}}</p>
        </div>
</template>



<style lang="css" scoped>

</style>