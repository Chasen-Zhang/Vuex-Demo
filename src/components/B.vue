<template lang="html">
    <div class="b">
        page B {{count}}-----{{money}}-----{{doubleCount}}
        <button @click="add(money)">+</button>
        <button @click="reduce">-</button>
    </div>
</template>
<script>
import { mapActions,mapState,mapGetters } from 'vuex'
export default {
    computed:{
       ...mapState({
           count: state=> state.b.count,
           money(state){
               return state.a.money+100;
           }
       }),
       ...mapGetters({
           doubleCount:'b/doubleCount'
       })
    },
    methods:{
        ...mapActions('b',['add','reduce'])
    }
}
    
</script>
<style lang="less">
    
</style>
