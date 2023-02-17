<template>

<p>DataCounter {{DataCounter}}</p>
<p>Reference variable counter {{counterRef}}</p>

<h3 class="text-2xl">Reactive Object Declaration</h3>
        <pre>
            const userReactive = reactive ({
                username : "Testing"
            })
        </pre>
        
        <!-- <p> <b>output: </b> {{ userReactive }}</p> -->
        <p> <b>output: </b> {{ userReactive.username }}</p>


<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="addNumber">Add value</button>
<p> counterRef : {{counterRef}}</p>        
<p> userReactive.counter :{{userReactive.counter}}</p>        
<p> userReactive.username data from alias :{{usernameconst}}</p>        
<p> forWrapptoRef :{{forWrapptoRef.count}}</p>        
<p>doubleCounterData : {{ doubleCounterData }}</p>
</template>

<script setup>
import {ref,reactive,computed,watch,toRefs} from 'vue';
// export default{
//     setup(){
        const DataCounter = 0
        const counterRef = ref(0)
        const userReactive = reactive({
            username : "Testing",
            counter : 0
        })
        const forWrapptoRef = reactive ({
            username : "Data",
            age : 32,
            count : 0,
            counterData : 0
        })
        const dataProps = toRefs(forWrapptoRef)

        function addNumber() {
            console.log("called");
            counterRef.value++
            userReactive.counter++
            forWrapptoRef.count++
            userReactive.username = "Something"
        }

        const doubleCounterData = computed(()=>{
            return userReactive.counter * 2
        })
        setTimeout(()=>{
            // DataCounter = 1
            counterRef.value= 1
        },2000);

        watch(counterRef,(oldVal,newVal)=>{
            console.log("Old val",oldVal);
            console.log("new val",newVal);
            if (newVal === 5) {
                forWrapptoRef.count = 0
            }
        })
//         return{
//             DataCounter,
//             counterRef,
//             userReactive,
//             addNumber,
//             forWrapptoRef,
//             doubleCounterData,
//             usernameconst:userReactive.username
//         }
//     }
// }
</script>