<template>
  <div class="px-5">
    <div v-for="i in [1]" :key="i" class="main-form grid gap-10 grid-cols-2 dark:text-gray-300 text-gray-700">
      <!-- Personal Information -->
      <div class="">
        <div class="grid gap-3 grid-cols-2">
          <div class="form-title">
            <h1>Personal Information</h1>
          </div>
          <div class="col-span-2">
            <input-text label="Identity Number" placeholder="Put your identity number"></input-text>
          </div>
          <div class="col-span-1">
            <input-text label="First Name" value="test"></input-text>
          </div>
          <div class="form-group col-span-1">
            <label for="last_name">Last Name</label>
            <input type="text" class="form-control" id="last_name" />
          </div>
          <div class="form-group col-span-1">
            <label for="born_at">Born At</label>
            <input type="text" class="form-control" id="born_at" />
          </div>
          <div class="form-group col-span-1">
            <label for="date_of_birhtday">Date of Birhtday</label>
            <input type="text" class="form-control" id="date_of_birhtday" />
          </div>
          <div class="form-group col-span-1">
            <label for="">Gender</label>
            <div class="py-3">
              <div class="form-radio">
                <input type="radio" name="gender" id="famela"> <label for="famela">Famela</label>
              </div>
              <div class="form-radio">
                <input type="radio" name="gender" id="male"> <label for="male">Male</label>
              </div>
            </div>
          </div>
          <div class="form-group col-span-1">
            <label for="religion">Religion</label>
            <select name="" class="form-control" id="">
                <option value="">Islam</option>
                <option value="">Islam</option>
                <option value="">Islam</option>
            </select>
          </div>
          <div class="form-group col-span-1">
            <label for="blood">Blood</label>
            <input type="text" class="form-control" id="blood" />
          </div>
          <div class="form-group col-span-1">
            <label for="etnic">Etnic / Clan</label>
            <input type="text" class="form-control" id="etnic" />
          </div>
        </div>
      </div>

      <!-- Contact & Documents -->
      <div>
        <div class="grid gap-3 grid-cols-2">
          <div class="form-title">
            <h1>Contact</h1>
          </div>
          <div class="form-group col-span-1">
            <label for="identity_number">Phone Number (Primary)</label>
            <input type="text" class="form-control" id="identity_number" />
          </div>
          <div class="form-group col-span-1">
            <label for="identity_number">Phone Number (Secondary)</label>
            <input type="text" class="form-control" id="identity_number" />
          </div>
          <div class="form-group col-span-1">
            <label for="identity_number">Email (Primary)</label>
            <input type="text" class="form-control" id="identity_number" />
          </div>
          <div class="form-group col-span-1">
            <label for="identity_number">Email (Secondary)</label>
            <input type="text" class="form-control" id="identity_number" />
          </div>

          <div class="form-title">
            <h1>File & Documents</h1>
          </div>

          <div class="col-span-2">
            <div class="grid gap-4 grid-cols-3" id="file_upload">
              
              <custom-upload-file label="Identity Card"></custom-upload-file>
              <custom-upload-file label="Identity Card"></custom-upload-file>
              <custom-upload-file label="Identity Card"></custom-upload-file>
              
            </div>
          </div>

          <div class="form-group">
            <label for="customRange3">Custom range</label>
            <input type="range" class="custom-range custom-range-teal" id="customRange3">
          </div>
          <div class="form-group">
            <label for="customRange3">Custom range</label>
            <input type="range" class="custom-range custom-range-teal" id="customRange3">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from '@/renderer/components/elements/form/InputText.vue'
import { initFileUpload } from '@/utils/common.js'
import CustomUploadFile from '@/renderer/components/partial/form/CustomUploadFile.vue'

export default {
  components: {
    InputText,
    CustomUploadFile
  },
  mounted() {

    initFileUpload(document.querySelector('#file_upload'));

  },
};
</script>

<style lang="scss">
.main-form {
  @apply mt-4;

  .form-title {
    @apply col-span-2 text-xl font-semibold;
  }

  .form-group {
    label {
      @apply font-normal;
    }

    .custom-range {
        @apply dark:bg-gray-800 rounded-md text-red-600;
        width: 100%;
        height: 1rem;
        padding: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .form-radio {
      @apply inline mr-3;


      label {
        @apply inline;
      }
    }

    .form-control {
      @apply w-full bg-white border border-gray-300 rounded-md py-2 px-3 outline-none;
      @apply dark:bg-gray-800 dark:border-gray-900;

      &::placeholder {
        @apply dark:text-gray-600;
      }
    }

   
  }
}
</style>
