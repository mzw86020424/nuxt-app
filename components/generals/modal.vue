<template>
  <div>
    <teleport to="body">
      <div class="modal" id="sample-modal" v-show="isVisible" @click="close"></div>
      <div class="modal-content" v-show="isVisible">
        <div class="modal-header">
          <h2>Modal Title</h2>
          <button class="close-button" @click="close">×</button>
        </div>
        <div class="modal-body">
          <p>テスト</p>
        </div>
        <div class="modal-footer">
          <button class="button">OK</button>
          <button class="button secondary-button" @click="close">キャンセル</button>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script setup>
defineProps({
  isVisible: { default: false }
})

defineEmits(['close'])
</script>
