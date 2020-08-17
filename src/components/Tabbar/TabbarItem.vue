<template>
    <div id="tab-bar-item" @click="itemClick" :style="activeStyle">
        <div class="content">
            <slot name="item-icon"></slot>
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
        props: {
            path: {
                type: String
            },
            activeColor:{
                type:String,
                default:'red'
            }
        },
        methods: {
            itemClick() {
                this.$router.push(this.path)
            }
        },
        computed:{
            isAcitve(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                return this.isAcitve?{color:this.activeColor}:{}
            }
        }

    }
</script>

<style scoped>
    #tab-bar-item {
        flex: 1;
        text-align: center;
        font-size: 1rem;
        height: 4.08rem;
    }
    .content{
        margin-top: 0.5rem;
    }
    #tab-bar-item img {
        width: 20px;
        height: 20px;
    }
</style>