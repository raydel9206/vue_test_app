<script setup>
import BreadCrumbs from '@/components/webComponents/BreadCrumbs.vue';
import PointSeparator from '@/assets/icons/PointSeparator.vue';
import RatingFour from '@/assets/icons/RatingFour.vue';
import Comments from '@/assets/icons/Comments.vue';
import Solds from '@/assets/icons/Solds.vue';
import Success from '@/assets/icons/Success.vue';
import VerticalSeparator from '@/assets/icons/VerticalSeparator.vue';
import Flag from '../../assets/icons/Flag.vue';
import Verified from '../../assets/icons/Verified.vue';
import Worldwide from '../../assets/icons/Worldwide.vue';
import isFavorite from '../../assets/icons/isFavorite.vue';
import Promotion from '../../assets/icons/Promotion.vue';
import Check from '../../assets/icons/Check.vue';
import { useRoute } from 'vue-router';

// Toast
import { useToast } from 'vue-toastification';
const toast = useToast();

const crumbs = ['Home', 'Clothings', 'Men’s wear', 'Summer clothing'];

import { useProductsStore } from '@/store/products';
import { computed, onMounted } from 'vue';

const store = useProductsStore();
const route = useRoute();
const id = route.params.id;

const suggestions = computed(() => {
    return store.suggestions;
});

const relateds = computed(() => {
    return store.relateds;
});

const currentProd = computed(() => {
    return store.currentProd;
});

const addFav = async (evt, change) => {
    await store.addFav(evt, !change);
    const textMsg = !change ? 'Se añadió a favoritos': 'Se eliminó de favoritos'
    await store.addFav(evt, !change);
    toast.success(textMsg);
}

onMounted(() => {
    store.fetchSuggestions();
    store.fetchRelateds();
    store.fetchProdById(id);
});

</script>
<template>
    <div class="md:px-[10%] lg:px-[15%] sm:px-[2%] mb-8 ">
        <BreadCrumbs :crumbs="crumbs" />
        <div class="flex flex-col gap-4">
            <div class="flex flex-row w-full h-full bg-white rounded-md border border-zinc-200 p-4 gap-6">
                <!-- Images -->
                <div class="lg:w-[30%] md:w-[35%] flex flex-col">
                    <div class="h-90 bg-white rounded-md border border-zinc-200 p-2">
                        <img class="w-full h-full" :src=currentProd.img />
                    </div>
                    <div class="w-full flex flex-row gap-2 mt-4">
                        <div class="w-1/6 h-12 bg-white rounded-sm border border-zinc-200 p-1">
                            <img class="w-full h-full" :src=currentProd.img />
                        </div>
                        <div class="w-1/6 h-12 bg-white rounded-sm border border-zinc-200 p-1">
                            <img class="w-full h-full" :src=currentProd.img />
                        </div>
                        <div class="w-1/6 h-12 bg-white rounded-sm border border-zinc-200 p-1">
                            <img class="w-full h-full" :src=currentProd.img />
                        </div>
                        <div class="w-1/6 h-12 bg-white rounded-sm border border-zinc-200 p-1">
                            <img class="w-full h-full" :src=currentProd.img />
                        </div>
                        <div class="w-1/6 h-12 bg-white rounded-sm border border-zinc-200 p-1">
                            <img class="w-full h-full" :src=currentProd.img />
                        </div>
                        <div class="w-1/6 h-12 bg-white rounded-sm border border-zinc-200 p-1">
                            <img class="w-full h-full" :src=currentProd.img />
                        </div>
                    </div>
                </div>

                <!-- Details -->
                <div class="lg:w-[50%] md:w-[40%] mb-6">
                    <div class="flex flex-col w-full h-full gap-2">
                        <div class="flex flex-row w-full">
                            <div class="w-6 h-6 relative flex-col justify-start items-start inline-flex">
                                <Success />
                            </div>
                            <div class="text-green-600 text-base font-normal">In stock</div>
                        </div>
                        <div class="w-96 text-zinc-900 text-xl font-semibold">
                            {{ currentProd.name }}
                        </div>
                        <div class="flex flex-row items-center gap-2">
                            <div class="flex flex-row gap-1 items-center">
                                <RatingFour />
                                <div class="text-amber-500 text-base font-normal">9.3</div>
                            </div>
                            <PointSeparator />
                            <div class="flex flex-row items-center gap-1 text-gray-400 text-base font-normal">
                                <Comments />
                                32 views
                            </div>
                            <PointSeparator />
                            <div class="flex flex-row items-center gap-1 text-gray-400 text-base font-normal">
                                <Solds />
                                154 sold
                            </div>
                        </div>
                        <div class="w-full h-24 flex flex-row bg-orange-100 items-center">
                            <div class="w-1/3 flex flex-col items-center">
                                <div class="text-red-500 text-lg font-semibold ">$98.00</div>
                                <div class="text-zinc-600 text-xs font-normal ">50-100 pcs</div>
                            </div>
                            <VerticalSeparator />
                            <div class="w-1/3 flex flex-col items-center">
                                <div class="text-zinc-900 text-lg font-semibold ">$90.00</div>
                                <div class="text-zinc-600 text-xs font-normal ">100-700 pcs</div>
                            </div>
                            <VerticalSeparator />
                            <div class="w-1/3 flex flex-col items-center">
                                <div class="text-zinc-900 text-lg font-semibold ">$98.00</div>
                                <div class="text-zinc-600 text-xs font-normal ">700+ pcs</div>
                            </div>
                        </div>
                        <div class="flex flex-row mt-2 border-b border-zinc-200 pb-2">
                            <div class="w-1/2 text-gray-400 text-base font-normal ">Price: </div>
                            <div class="w-full text-neutral-600 text-base font-normal ">{{ currentProd.price }}</div>
                        </div>
                        <div class="flex flex-row mt-2 border-b border-zinc-200 pb-2">
                            <div class="flex flex-col w-full gap-2">
                                <div class="flex flex-row">
                                    <div class="w-1/2 text-gray-400 text-base font-normal ">Type: </div>
                                    <div class="w-full text-neutral-600 text-base font-normal ">Classic shoes</div>
                                </div>
                                <div class="flex flex-row">
                                    <div class="w-1/2 text-gray-400 text-base font-normal ">Design: </div>
                                    <div class="w-full text-neutral-600 text-base font-normal ">Plastic material</div>
                                </div>
                                <div class="flex flex-row mb-2">
                                    <div class="w-1/2 text-gray-400 text-base font-normal ">Type: </div>
                                    <div class="w-full text-neutral-600 text-base font-normal ">Modern nice</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row mt-2 border-b border-zinc-200 pb-2">
                            <div class="flex flex-col w-full gap-2">
                                <div class="flex flex-row">
                                    <div class="w-1/2 text-gray-400 text-base font-normal ">Customization: </div>
                                    <div class="w-full text-neutral-600 text-base font-normal ">Customized logo and design
                                        custom package</div>
                                </div>
                                <div class="flex flex-row">
                                    <div class="w-1/2 text-gray-400 text-base font-normal ">Protection: </div>
                                    <div class="w-full text-neutral-600 text-base font-normal ">Refund Policy</div>
                                </div>
                                <div class="flex flex-row  mb-2">
                                    <div class="w-1/2 text-gray-400 text-base font-normal ">Warranty: </div>
                                    <div class="w-full text-neutral-600 text-base font-normal ">2 years full warranty</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Actions -->
                <div class="lg:w-[20%] md:w-[25%]">
                    <div class="w-full flex flex-col gap-2 h-80 bg-white rounded-md  border border-zinc-200 p-4">
                        <div class="flex flex-row gap-2 border-b border-zinc-200 pb-4">
                            <div class="w-12 h-12 bg-teal-100 flex rounded justify-center items-center">
                                <div class="text-emerald-400 text-opacity-60 text-3xl font-semibold">R</div>
                            </div>
                            <div class="flex flex-col">
                                <div class="text-zinc-900 text-base font-normal l">Supplier</div>
                                <div class="text-zinc-900 text-base font-normal l">Guanjoi Trading
                                    LLC</div>
                            </div>
                        </div>
                        <div class="flex flex-row items-center gap-4">
                            <Flag />
                            <div class="text-gray-400 text-base font-normal">Germany, Berlin</div>
                        </div>
                        <div class="flex flex-row items-center gap-4">
                            <Verified />
                            <div class="text-gray-400 text-base font-normal">Verified Seller</div>
                        </div>
                        <div class="flex flex-row items-center gap-4">
                            <Worldwide />
                            <div class="text-gray-400 text-base font-normal">Worldwide shipping</div>
                        </div>

                        <div
                            class="w-full mt-4 h-10 px-4 bg-primary rounded-md flex-col justify-center items-center gap-2.5 inline-flex">
                            <div class="justify-start items-start gap-2.5 inline-flex">
                                <div class="text-center text-white text-base font-medium">Send inquiry</div>
                            </div>
                        </div>
                        <div
                            class="w-full h-10 px-4 bg-white rounded-md border-2 border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex">
                            <div class="justify-start items-start gap-2.5 inline-flex">
                                <div class="text-center text-primary text-base font-medium">
                                    Seller’s profile
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row items-center justify-center mt-6 gap-2 cursor-pointer h-12" @click="addFav(currentProd.id, currentProd.isFavorite)">
                        <isFavorite />
                        <div v-if="!currentProd.isFavorite" class="text-primary text-base font-medium">Save for later</div>
                        <div v-else class="text-primary text-base font-medium">Remove from favorites</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-4">
                <div class="lg:w-[80%] md:w-[75%] sm:w-[75%]  bg-white rounded-md border border-zinc-200 pl-2">
                    <div class="w-full h-12 border-b border-zinc-200 justify-start items-start inline-flex">
                        <div
                            class="w-28 self-stretch px-4 pt-4 pb-3 border-b-2 border-primary justify-center items-center inline-flex">
                            <div class="text-center text-primary text-base font-medium ">Description</div>
                        </div>
                        <div
                            class="w-24 self-stretch px-5 pt-4 pb-3 border-b border-zinc-200 justify-center items-center inline-flex">
                            <div class="text-center text-gray-400 text-base font-medium ">Reviews</div>
                        </div>
                        <div
                            class="w-24 self-stretch px-4 pt-4 pb-3 border-b border-zinc-200 justify-center items-center inline-flex">
                            <div class="text-center text-gray-400 text-base font-medium ">Shipping</div>
                        </div>
                        <div
                            class="w-38 self-stretch px-7 pt-4 pb-3 border-b border-zinc-200 justify-center items-center inline-flex">
                            <div class="text-center text-gray-400 text-base font-medium ">About seller</div>
                        </div>
                    </div>
                    <div class="w-full text-neutral-600 text-base font-normal p-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                        Ut enim ad minim veniam, <br />Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </div>
                    <div class="pl-4 flex flex-col my-2">
                        <div
                            class="md:w-[60%] lg:w-[50%] sm:w-[60%] flex flex-row h-9 items-center border-r border-l border-t border-zinc-200">
                            <div class="w-52 h-full flex bg-gray-100 pl-2 items-center">
                                <div class="text-neutral-600 text-base font-normal">Model</div>
                            </div>
                            <div class="w-80 h-full flex items-center pl-2 bg-white">
                                <div class="text-neutral-600 text-base font-normal">#8786867</div>
                            </div>
                        </div>
                        <div
                            class="md:w-[60%] lg:w-[50%] sm:w-[60%] flex flex-row h-9 items-center border-r border-l border-t border-zinc-200">
                            <div class="w-52 h-full flex bg-gray-100 pl-2 items-center">
                                <div class="text-neutral-600 text-base font-normal">Style</div>
                            </div>
                            <div class="w-80 h-full flex items-center pl-2 bg-white">
                                <div class="text-neutral-600 text-base font-normal">#8786867</div>
                            </div>
                        </div>
                        <div
                            class="md:w-[60%] lg:w-[50%] sm:w-[60%] flex flex-row h-9 items-center border-r border-l border-t border-zinc-200">
                            <div class="w-52 h-full flex bg-gray-100 pl-2 items-center">
                                <div class="text-neutral-600 text-base font-normal">Classic style</div>
                            </div>
                            <div class="w-80 h-full flex items-center pl-2 bg-white">
                                <div class="text-neutral-600 text-base font-normal">Classic style</div>
                            </div>
                        </div>
                        <div
                            class="md:w-[60%] lg:w-[50%] sm:w-[60%] flex flex-row h-9 items-center border-r border-l border-t border-zinc-200">
                            <div class="w-52 h-full flex bg-gray-100 pl-2 items-center">
                                <div class="text-neutral-600 text-base font-normal">Certificate</div>
                            </div>
                            <div class="w-80 h-full flex items-center pl-2 bg-white">
                                <div class="text-neutral-600 text-base font-normal">ISO-898921212</div>
                            </div>
                        </div>
                        <div
                            class="md:w-[60%] lg:w-[50%] sm:w-[60%] flex flex-row h-9 items-center border-r border-l border-t border-zinc-200">
                            <div class="w-52 h-full flex bg-gray-100 pl-2 items-center">
                                <div class="text-neutral-600 text-base font-normal">Size</div>
                            </div>
                            <div class="w-80 h-full flex items-center pl-2 bg-white">
                                <div class="text-neutral-600 text-base font-normal">34mm x 450mm x 19mm</div>
                            </div>
                        </div>
                        <div class="md:w-[60%] lg:w-[50%] sm:w-[60%] flex flex-row h-9 items-center border border-zinc-200">
                            <div class="w-52 h-full flex bg-gray-100 pl-2 items-center">
                                <div class="text-neutral-600 text-base font-normal">Memory</div>
                            </div>
                            <div class="w-80 h-full flex items-center pl-2 bg-white">
                                <div class="text-neutral-600 text-base font-normal">36GB RAM</div>
                            </div>
                        </div>
                    </div>
                    <div class="pl-4 flex flex-col my-6 gap-2">
                        <div class="flex flex-row">
                            <Check />
                            <div class="text-neutral-600 text-base font-normal ">
                                Some great feature name here</div>
                        </div>
                        <div class="flex flex-row">
                            <Check />
                            <div class="text-neutral-600 text-base font-normal ">
                                Lorem ipsum dolor sit amet, consectetur
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <Check />
                            <div class="text-neutral-600 text-base font-normal ">
                                Duis aute irure dolor in reprehenderit
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <Check />
                            <div class="text-neutral-600 text-base font-normal ">
                                Some great feature name here
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:w-[20%] md:w-[25%] sm:w-[30%] h-full bg-white rounded-md border border-zinc-200 p-4">
                    <div class="text-zinc-900 text-base font-semibold">You may like</div>
                    <div class="flex flex-col mt-2 gap-4">
                        <div v-for="(item, index) in suggestions" :key="index" class="flex flex-row gap-2">
                            <div class="w-[30%] bg-white rounded-md border border-zinc-200">
                                <div class="justify-center items-center rounded-md p-1">
                                    <img class="w-full h-16" :src="item.img" />
                                </div>
                            </div>
                            <div class="w-[70%] flex flex-col">
                                <div class="w-full text-neutral-600 text-base font-normal text-zinc-900">{{ item.name }}
                                </div>
                                <div class="text-gray-400 text-base">{{ item.range }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-[40%] bg-white rounded-md border border-zinc-200 p-4">
                <div class="text-zinc-900 text-xl font-semibold p-2">Related products</div>
                <div class="flex flex-row">
                    <div v-for="(item, index) in relateds" :key="index" class="w-1/6 flex flex-col p-2 gap-4">
                        <div class="justify-center items-center bg-zinc-100 rounded-md p-4">
                            <img class="w-full lg:h-36 md:h-32 sm:h-28" :src="item.img" />
                        </div>
                        <div class="w-full text-neutral-600 text-base">{{ item.name }} </div>
                        <div class="text-gray-400 text-base">{{ item.range }}</div>
                    </div>
                </div>
            </div>
            <div class="w-full h-28 flex flex-row rounded">
                <div class="z-10 w-[80%] bg-no-repeat bg-[url('/img/Rectangle.svg')] rounded-md">
                    <div class="flex flex-col p-6">
                        <div class="w-full z-50 text-white text-2xl font-semibold">
                            Super discount on more than 100 USD
                        </div>
                        <div class="opacity-70 text-white text-base font-normal">
                            Have you ever finally just write dummy info
                        </div>
                    </div>
                </div>
                <div
                    class="z-0 flex lg:w-[80%] md:w-[40%] sm:w-[40%] lg:-ml-56 md:-ml-24 sm:-ml-36 relative bg-blue-900 rounded-lg items-center pr-12 justify-end">
                    <div
                        class="w-28 h-10 px-4 bg-amber-500 rounded-md flex-col justify-center items-center gap-2.5 inline-flex">
                        <div class="justify-start items-start gap-2.5 inline-flex">
                            <div class="text-center text-white text-base font-medium ">
                                Shop now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>