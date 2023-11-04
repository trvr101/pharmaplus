<template>
  <div>
    <qrcode-stream @detect="onDetect"
      ><h1 class="text-white">Try</h1></qrcode-stream
    >
  </div>
</template>
<script>
import { QrcodeStream } from "vue3-qrcode-reader";
export default {
  components: {
    QrcodeStream,
  },

  methods: {
    async onDetect(detectedCodes) {
      console.log("Detected QR Codes:", await detectedCodes);
      if (detectedCodes.length > 0) {
        console.log("QR Code Value:", detectedCodes[0].text);
        // Use detectedCodes[0].text to get the value of the first detected QR code
      }
    },
    onError(error) {
      if (error.name === "NotAllowedError") {
        // user denied camera access permission
      } else if (error.name === "NotFoundError") {
        // no suitable camera device installed
      } else if (error.name === "NotSupportedError") {
        // page is not served over HTTPS (or localhost)
      } else if (error.name === "NotReadableError") {
        // maybe camera is already in use
      } else if (error.name === "OverconstrainedError") {
        // did you request the front camera although there is none?
      } else if (error.name === "StreamApiNotSupportedError") {
        // browser seems to be lacking features
      }
    },
  },
};
</script>
