<template lang="html">
    <div class="a">
        page {{$store.state.a.money}}
        <button @click="add">+</button>
        <button @click="reduce">-</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions('a',['add','reduce'])
    }
}
    
</script>
<style lang="less">
    
</style>
