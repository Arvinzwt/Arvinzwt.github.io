<template>
    <!--nav-->
    <aside class="wmm-scroll-active">
        <div class="title">目录</div>
        <ul>
            <li class="item" v-for="(item,index) in items" :key="index" @click="itemClickHandle(item)">
                {{ item.innerHTML }}
            </li>
        </ul>
    </aside>
</template>

<script>
import animation from "@/assets/js/animation";

export default {
    props: ['target'],
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        this.items = document.querySelectorAll('h1');
    },
    methods: {
        itemClickHandle(elem) {
            let wrap = document.querySelector(this.target);

            let from = wrap.scrollTop;
            let to = elem.offsetTop - wrap.offsetTop;

            animation(from, to, value => {
                wrap.scrollTop = value;
            })
        }
    }
}
</script>

<style lang="scss">
.wmm-scroll-active {
    padding: 0 20px;

    .title {
        font-weight: bold;
        padding: 10px;
        font-size: 16px;
    }

    .item {
        cursor: pointer;
        line-height: 1.8;
        list-style: inside;
    }
}
</style>