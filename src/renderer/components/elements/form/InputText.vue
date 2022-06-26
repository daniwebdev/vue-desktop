<template>
  <div class="form-group">
    <label v-if="label != ''" :for="id">{{ label }}</label>
    <input v-model="modelValue" :disabled="disabled" :placeholder="placeholder" :type="type" class="form-control" :id="id" />
  </div>
</template>

<script>
export default {
    name: "InputText",

    props: {
        label: {
            type: String,
            default: "",
        },
        value: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "text",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        id: {
            type: String,
            default: "",
        }
    },
    computed: {
        modelValue() {
            return this.value == "" ? "" : this.value;
        }
    }
}
</script>