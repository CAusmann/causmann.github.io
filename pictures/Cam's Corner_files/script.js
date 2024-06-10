// @ts-nocheck
document.addEventListener("DOMContentLoaded", function () {
  let captchaLoaded = false;
  let uploaderLoaded = false;
  function CaptchaLoader() {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');
    if (captchadiv.length && !captchaLoaded) {
      let lang = null;
      let onload = null;
      let render = null;

      captchadiv.forEach(function (item) {
        const sitekey = item.dataset.sitekey;
        lang = item.dataset.lang;
        onload = item.dataset.onload;
        render = item.dataset.render;

        if (!sitekey) {
          item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
        }
      });

      let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
      if (lang) {
        scriptSrc += `&hl=${lang}`;
      }
      if (onload) {
        scriptSrc += `&onload=${onload}`;
      }
      if (render) {
        scriptSrc += `&render=${render}`;
      }

      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = scriptSrc;
      document.body.appendChild(script);
    }
    captchaLoaded = true;
  }

  function FileUploader() {
    const fileupload = document.querySelectorAll('[data-fileupload="true"]');

    if (fileupload.length && !uploaderLoaded) {
      let jqueryLoaded;
      if (typeof jQuery === "undefined") {
        jqueryLoaded = false;
      } else {
        jqueryLoaded = true;
      }

      const ucareScript = jqueryLoaded
        ? "uploadcare.min.js"
        : "uploadcare.full.min.js";

      let script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = `https://ucarecdn.com/libs/widget/3.x/${ucareScript}`;
      document.body.appendChild(script);

      const styles = `.uploadcare--widget__button.uploadcare--widget__button_type_open {
background-color: ${fileupload[0].dataset.backgroundColor || "#2a2a2a"};
color: ${fileupload[0].dataset.textColor || "#FFFFFF"};
}`;

      let styleSheet = document.createElement("style");
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);

      function maxFileSize(size) {
        return function (fileInfo) {
          if (fileInfo.size !== null && fileInfo.size > size) {
            // alert("File Size exceeded!")
            throw new Error("fileMaximumSize");
          }
        };
      }

      script.addEventListener("load", function () {
        fileupload.forEach(function (item) {
          item.setAttribute("name", "attachment");
          let widget = uploadcare.Widget(item, {
            publicKey: "a0e4fd45fb9d5fed7599",
            systemDialog: true,
          });
          if (item.dataset.maxsize) {
            widget.validators.push(
              maxFileSize(parseInt(item.dataset.maxsize) * 1024 * 1024)
            );
          }
        });
      });

      const ButtonText = fileupload[0].dataset.buttonText;

      // File upload text settings
      UPLOADCARE_LOCALE_TRANSLATIONS = {
        errors: {
          fileMinimalSize: "File is too small",
          fileMaximumSize: "File is too large",
        },
        buttons: {
          choose: {
            files: {
              ...(ButtonText && {
                one: ButtonText,
              }),
              ...(ButtonText && {
                other: ButtonText,
              }),
            },
          },
        },
      };
    }
    uploaderLoaded = true;
  }
  CaptchaLoader();
  FileUploader();

  // Reload Scripts - Handle Back Button
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      CaptchaLoader();
      FileUploader();
    }
  });
});
