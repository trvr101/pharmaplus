<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        avatar="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=jYB7aOZ9-F4AX_EyMTU&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfAgZaVS7K7vyfT2S2l7LP92FqbqXubO7K98aVRoU21B_A&oe=654AA7AD"
        :text="['hey, how are you?']"
        size="7"
        stamp="7 minutes ago"
        sent
        bg-color="teal-2"
      />
      <q-chat-message
        name="Vhon"
        avatar="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-1/353657470_6399236253471435_3610973101389954298_n.jpg?stp=dst-jpg_s320x320&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFtPQSKDQPgtEmaiIM0Dp-xntBwbDJnFsCe0HBsMmcWwPxF2lm8xz_Jj-SuuANPs5D-FNPA4cnmm-n7d7Xt-VRV&_nc_ohc=tAppbM7GrwUAX_bXZRI&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfB9_oMMrtAonWum2jAUFrFhLc2gFkiLpil6cMpU_jJj5g&oe=654CE497"
        :text="[
          'doing fine, how r you?',
          'I just feel like typing a really, really, REALLY long message to annoy you...',
        ]"
        size="7"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="Vhon"
        avatar="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-1/353657470_6399236253471435_3610973101389954298_n.jpg?stp=dst-jpg_s320x320&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFtPQSKDQPgtEmaiIM0Dp-xntBwbDJnFsCe0HBsMmcWwPxF2lm8xz_Jj-SuuANPs5D-FNPA4cnmm-n7d7Xt-VRV&_nc_ohc=tAppbM7GrwUAX_bXZRI&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfB9_oMMrtAonWum2jAUFrFhLc2gFkiLpil6cMpU_jJj5g&oe=654CE497"
        :text="['Did it work?']"
        stamp="1 minutes ago"
        size="7"
        text-color="white"
        bg-color="primary"
      />

      <q-chat-message
        name="me"
        avatar="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/289414022_1203904480373456_2428413500028325985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqwnoOZjDkyMBcuvpdLT-GRqFTvwUxfAlGoVO_BTF8CUL2x8W-PZWCVTeG_EEYQvJm9IBJ8soiTHcCo1iXYcU5&_nc_ohc=jYB7aOZ9-F4AX_EyMTU&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=00_AfAgZaVS7K7vyfT2S2l7LP92FqbqXubO7K98aVRoU21B_A&oe=654AA7AD"
        :text="['hey, how are you?']"
        size="7"
        stamp="7 minutes ago"
        sent
        bg-color="teal-2"
      />
      <q-chat-message
        name="Vhon"
        avatar="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-1/353657470_6399236253471435_3610973101389954298_n.jpg?stp=dst-jpg_s320x320&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFtPQSKDQPgtEmaiIM0Dp-xntBwbDJnFsCe0HBsMmcWwPxF2lm8xz_Jj-SuuANPs5D-FNPA4cnmm-n7d7Xt-VRV&_nc_ohc=tAppbM7GrwUAX_bXZRI&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfB9_oMMrtAonWum2jAUFrFhLc2gFkiLpil6cMpU_jJj5g&oe=654CE497"
        :text="[
          'doing fine, how r you?',
          'I just feel like typing a really, really, REALLY long message to annoy you...',
        ]"
        size="7"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="Vhon"
        avatar="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-1/353657470_6399236253471435_3610973101389954298_n.jpg?stp=dst-jpg_s320x320&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFtPQSKDQPgtEmaiIM0Dp-xntBwbDJnFsCe0HBsMmcWwPxF2lm8xz_Jj-SuuANPs5D-FNPA4cnmm-n7d7Xt-VRV&_nc_ohc=tAppbM7GrwUAX_bXZRI&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfB9_oMMrtAonWum2jAUFrFhLc2gFkiLpil6cMpU_jJj5g&oe=654CE497"
        :text="['Did it work?']"
        stamp="1 minutes ago"
        size="7"
        text-color="white"
        bg-color="primary"
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </div>
  </div>
</template>
<script>
export default {};
</script>
