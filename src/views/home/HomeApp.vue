<template>
    <div>
        <h2 class="text-2xl">Hoşgeldiniz</h2>
        <div class="">
            <div class="w-full  flex flex-row px-10 items-center">
                <div class="space-y-3">
                    <span class="w-4/6 leading-5 text-left">Uygulamamız tamamen ücretsiz olup siz değerli
                        kullanıcılarımıza sunuyoruz. Heryerden notlarınıza ulaşabilirsiniz. Uygulamamıza kayıt olup
                        not tutmaya başlayabilirsiniz...</span>
                    <button class="float-left w-4/6 px-3"><router-link to="/note"
                            class="flex bg-green-700 hover:bg-green-600 text-white p-3 float-left">Not Tutmaya Başlayın
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6 mx-2">
                                <path fill-rule="evenodd"
                                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </router-link>
                    </button>
                </div>
                <img src="@/assets/note.png" alt="" class="swing">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeApp',
    components: {

    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.swing {
    -webkit-animation: swing 5s ease-in-out 0s infinite;
    -moz-animation: swing 5s ease-in-out 0s infinite;
    animation: swing 8s ease-in-out 0s infinite;
    -webkit-transform-origin: 50% 0;
    -moz-transform-origin: 50% 0;
    transform-origin: 50% 0;
    margin: 20px;
}

@-webkit-keyframes swing {
    0% {
        -webkit-transform: rotate(0);
    }

    5% {
        -webkit-transform: rotate(10deg);
    }

    10% {
        -webkit-transform: rotate(-9deg);
    }

    15% {
        -webkit-transform: rotate(8deg);
    }

    20% {
        -webkit-transform: rotate(-7deg);
    }

    25% {
        -webkit-transform: rotate(6deg);
    }

    30% {
        -webkit-transform: rotate(-5deg);
    }

    35% {
        -webkit-transform: rotate(4deg);
    }

    40% {
        -webkit-transform: rotate(-3deg);
    }

    45% {
        -webkit-transform: rotate(2deg);
    }

    50% {
        -webkit-transform: rotate(0);
    }

    100% {
        -webkit-transform: rotate(0);
    }
}

@-moz-keyframes swing {
    0% {
        -moz-transform: rotate(0);
    }

    5% {
        -moz-transform: rotate(10deg);
    }

    10% {
        -moz-transform: rotate(-9deg);
    }

    15% {
        -moz-transform: rotate(8deg);
    }

    20% {
        -moz-transform: rotate(-7deg);
    }

    25% {
        -moz-transform: rotate(6deg);
    }

    30% {
        -moz-transform: rotate(-5deg);
    }

    35% {
        -moz-transform: rotate(4deg);
    }

    40% {
        -moz-transform: rotate(-3deg);
    }

    45% {
        -moz-transform: rotate(2deg);
    }

    50% {
        -moz-transform: rotate(0);
    }

    100% {
        -moz-transform: rotate(0);
    }
}

@keyframes swing {
    0% {
        transform: rotate(0);
    }

    5% {
        transform: rotate(10deg);
    }

    10% {
        transform: rotate(-9deg);
    }

    15% {
        transform: rotate(8deg);
    }

    20% {
        transform: rotate(-7deg);
    }

    25% {
        transform: rotate(6deg);
    }

    30% {
        transform: rotate(-5deg);
    }

    35% {
        transform: rotate(4deg);
    }

    40% {
        transform: rotate(-3deg);
    }

    45% {
        transform: rotate(2deg);
    }

    50% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(0);
    }
}
</style>