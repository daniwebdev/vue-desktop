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