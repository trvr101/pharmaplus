<template>
  <!-- The rest of your component remains unchanged -->
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import AddItem from "components/MainLayout/forms/AddItem";
import AddNotes from "components/MainLayout/forms/AddNotes";
import AddSched from "components/MainLayout/forms/AddSched";

export default {
  components: {
    AddItem,
    AddNotes,
    AddSched,
  },
  setup() {
    const dialog = ref(false);
    const position = ref("bottom");
    const fabPos = ref([-18, window.innerHeight / 2]); // Adjust the initial position

    const open = (pos) => {
      position.value = pos;
      dialog.value = true;
    };

    const close = () => {
      dialog.value = false;
    };

    const moveFab = (ev) => {
      // Set a limit to prevent moving beyond the right side of the screen
      const x = Math.min(
        Math.max(fabPos.value[0] - ev.delta.x, 0),
        window.innerWidth - 0.25 * window.innerWidth
      );

      fabPos.value = [x, fabPos.value[1] - ev.delta.y];
    };

    const handleKeyDown = (event) => {
      // Check if Ctrl + Shift + F is pressed
      if (event.ctrlKey && event.shiftKey && event.key === "F") {
        if (dialog.value) {
          close();
        } else {
          open("bottom");
        }
        // Prevent the default action of the key combination
        event.preventDefault();
      }
    };

    const handleClickOutside = (event) => {
      const fab = document.querySelector(".fixed-bottom-right");
      if (fab && !fab.contains(event.target)) {
        close();
      }
    };

    const closeFab = () => {
      // Close the FAB when it loses focus
      close();
    };

    // Add global event listeners on component mount
    onMounted(() => {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("click", handleClickOutside);
    });

    return {
      fabPos,
      moveFab,
      handleKeyDown,
      handleClickOutside,
      closeFab,
    };
  },
};
</script>
