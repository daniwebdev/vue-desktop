<template>
    <div>
        <div class="frame">

            <div class="drag flex-1">
                <h2>Login</h2>
            </div>
            <div class="close">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        </div>
        <slot/>
    </div>
</template>

<style lang="scss">
    .frame {
        height: 30px;
        width: 100%;
        position: fixed;
        .close {
            
            height: 30px;
            width: 30px;
            cursor: pointer;
            @apply flex justify-center items-center hover:text-gray-200 hover:bg-red-500;
        }
        .drag {
            -webkit-app-region: drag;
        }

        @apply flex items-center pl-3 border-b border-gray-200;
    }
</style>