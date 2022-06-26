<template>
  <div class="context-menu">
    <ul>
      <li class="context-item" event="edit">
        <i class="fas fa-pencil-alt"></i>
        <span>Edit</span>
      </li>
      <li class="context-item" event="copy"><i class="fas fa-copy"></i> <span>Copy</span></li>
      <li class="context-item" event="paste"><i class="fas fa-paste"></i> <span>Paste</span></li>
      <li class="context-item" event="delete"><i class="fas fa-trash-alt"></i> <span>Delete</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  updated() {
    document.querySelectorAll('.context-item').forEach(item => {
      item.addEventListener('click', e => {
        this.$emit(e.target.getAttribute('event'), e);
      });
    });
  },
}
</script>