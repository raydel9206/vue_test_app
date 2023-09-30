
<script setup>
import Brand from '@/assets/icons/Brand.vue';
import User from '@/assets/icons/User.vue';
import Msg from '@/assets/icons/Msg.vue';
import Favorite from '@/assets/icons/Favorite.vue';
import Cart from '@/assets/icons/Cart.vue';
import ArrowDown from '@/assets/icons/ArrowDown.vue';

</script>
<template>
    <div class="flex flex-row w-full relative py-[2%] gap-6 justify-between bg-white md:px-[10%] lg:px-[15%] sm:px-[2%] items-center">
        <Brand />
        <div class="w-1/2 h-10 flex flex-row rounded-md border-2 justify-center border-primary items-center">
            <div class="w-[58%] h-10 flex flex-row relative items-center px-2">
                <div class="absolute text-gray-400 text-base font-normal">Search
                </div>
            </div>
            <div class="w-36 h-10 flex flex-row justify-end items-center border-l border-primary px-2">
                <div class="flex flex-row items-center text-zinc-900 text-base font-normal">
                    All category
                </div>
                <ArrowDown />
            </div>
            <div class="w-[20%] h-full flex flex-row bg-primary justify-center">
                <div class="flex flex-row justify-center items-center inline-flex">
                    <div class="text-center text-white text-base font-medium ">Search</div>
                </div>
            </div>
        </div>
        <div class="flex flex-row gap-6 text-gray-400 text-xs font-normal">
            <div class="flex flex-col items-center justify-center gap-2 cursor-pointer">
                <User />
                <span>Profile</span>
            </div>
            <div class="flex flex-col items-center justify-center gap-2 cursor-pointer">
                <Msg />
                <span>Message</span>
            </div>
            <div class="flex flex-col items-center justify-center gap-3 cursor-pointer">
                <Favorite />
                <span>Orders</span>
            </div>
            <div class="flex flex-col items-center justify-center gap-2 cursor-pointer">
                <Cart />
                <span>My cart</span>
            </div>
        </div>
    </div>
</template>