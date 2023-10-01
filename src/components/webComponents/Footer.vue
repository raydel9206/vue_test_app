<script setup>
import Brand from '@/assets/icons/Brand.vue';
import Facebook from '@/assets/icons/Facebook.vue';
import Twitter from '@/assets/icons/Twitter.vue';
import LinkedIn from '@/assets/icons/LinkedIn.vue';
import Instagram from '@/assets/icons/Instagram.vue';
import Youtube from '@/assets/icons/Youtube.vue';
import AppStore from '@/assets/icons/AppStore.vue';
import PlayStore from '@/assets/icons/PlayStore.vue';
import Email from '@/assets/icons/Email.vue';

const props = defineProps({
    subscrption: {
        type: Boolean,
        default: false,
    }
});

</script>

<template>
    <div class="relative inset-x-0 bottom-0">
        
        <!-- Subscribe -->
        <div v-if="subscrption" class="w-full h-48 bg-gray-100 items-center flex flex-col justify-center gap-4">
            <div class="text-center text-zinc-900 text-xl font-semibold">Subscribe on our newsletter
            </div>
            <div class="text-center text-zinc-600 ">Get daily news on
                upcoming offers from many suppliers all over the world</div>
            <div class="flex flex-row gap-4">
                <div
                    class="w-72 h-10 flex-row gap-2 items-center inline-flex border px-2 border-zinc-200 bg-white rounded-md">
                    <Email />
                    <div class="w-4/6 text-gray-400 ">Email</div>
                </div>
                <div class="w-28 bg-primary rounded-md flex-col justify-center items-center gap-2.5 inline-flex">
                    <div class="justify-start items-start gap-2.5 inline-flex">
                        <div class="text-center text-white font-medium">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Links -->
        <div class="bg-white h-80 md:px-[10%] lg:px-[15%] sm:px-[2%] items-center flex flex-row justify-between">
            <div class="grid gap-y-2 w-3/12">
                <Brand />
                <div class="w-full text-neutral-600 text-base">Best information about the company gies here but now lorem
                    ipsum
                    is
                </div>
                <div class="flex flex-row gap-4">
                    <Facebook class="cursor-pointer" />
                    <Twitter class="cursor-pointer" />
                    <LinkedIn class="cursor-pointer" />
                    <Instagram class="cursor-pointer" />
                    <Youtube class="cursor-pointer" />
                </div>
            </div>
            <div class="grid text-gray-400">
                <div class="text-zinc-900 font-inter_medium">About</div>
                <div class="cursor-pointer mt-2">About Us</div>
                <div class="cursor-pointer">Find store</div>
                <div class="cursor-pointer">Categories</div>
                <div class="cursor-pointer">Blogs</div>
            </div>
            <div class="grid text-gray-400">
                <div class="text-zinc-900 font-inter_medium">Partnership</div>
                <div class="cursor-pointer mt-2">About Us</div>
                <div class="cursor-pointer">Find store</div>
                <div class="cursor-pointer">Categories</div>
                <div class="cursor-pointer">Blogs</div>
            </div>
            <div class="grid  text-gray-400">
                <div class="text-zinc-900 font-inter_medium">Information</div>
                <div class="cursor-pointer mt-2">Help Center</div>
                <div class="cursor-pointer">Money Refund</div>
                <div class="cursor-pointer">Shipping</div>
                <div class="cursor-pointer">Contact us</div>
            </div>
            <div class="grid  text-gray-400">
                <div class="text-zinc-900 font-inter_medium">For users</div>
                <div class="cursor-pointer mt-2">Login</div>
                <div class="cursor-pointer">Register</div>
                <div class="cursor-pointer">Settings</div>
                <div class="cursor-pointer">My Orders</div>
            </div>
            <div class="grid gap-y-2">
                <div class="text-zinc-900 font-inter_medium">Get App</div>
                <AppStore class="cursor-pointer" />
                <PlayStore class="cursor-pointer" />
            </div>
        </div>
    </div>
</template>