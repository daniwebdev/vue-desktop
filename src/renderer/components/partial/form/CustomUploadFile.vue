<template>
    <div>
        <div class="form-group file-upload-area" @click.prevent="onClickContainer()" ref="uploadAhowArea">
            <i class="fas fa-upload mb-3 upload-icon"></i>
            <label class="">{{ label ?? '' }}</label>
        </div>
        <input type="file" hidden ref="inputUpload" @change.prevent="fileChanged">
    </div>
</template>

<script>
// import { ref } from 'vue'
// import { initFileUpload } from '@/utils/common';

export default {

    props: {
        label: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            required: true,
        }
    },

    methods: {
        fileChanged() {
            console.log(this.$refs.inputUpload.files);
            let targetFiles = this.$refs.inputUpload.files;
            let fileObjectURL = URL.createObjectURL(targetFiles[0]);

            let _target = this.$refs.uploadAhowArea;


            console.log(_target);

            _target.style.backgroundImage = `url(${fileObjectURL})`;
            _target.style.backgroundSize = "cover";

        },
        onClickContainer() {

            this.$refs.inputUpload.click()
        }
    },
}
</script>

<style lang="scss">
.file-upload-area {
    @apply flex flex-col justify-center items-center text-3xl h-40 dark:bg-gray-900 rounded-md;
    @apply hover:bg-gray-200 dark:hover:bg-gray-800;
    @apply border border-gray-300 dark:border-gray-900;

    cursor: pointer;

    .upload-icon {
        @apply dark:bg-gray-900 shadow-md;
        width: 60px;
        height: 60px;

        font-size: 25px;

        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    * {
        cursor: pointer;
    }
}
</style>