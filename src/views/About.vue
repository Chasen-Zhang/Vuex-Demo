<template>
    <div class="about">
        {{$store.state}}
        <h1 @click="increment">increment</h1>
        <h1 @click="decrement">decrement</h1>
        <div>-----------------------------------------------</div>
        <A/>
        <B/>
    </div>
</template>
<script>
import A from '../components/A.vue'
import B from '../components/B.vue'
import {mapActions} from 'vuex';
export  default {
    methods:{
        ...mapActions([
            'increment',
            'decrement'
        ])
    },
    components:{
        A,
        B
    }
}
</script>
<style lang="less">

</style>
