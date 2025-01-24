import React, { useEffect, useState } from "react";

const useCheckBoxValidator = (formRef) => {
  const [result, setResult] = useState([]);

  function validate() {
    const checkboxes = formRef.current.querySelectorAll('[name="source[]"]');
    let atLeastOneChecked = false;

    console.log(checkboxes);

    // for (var i = 0; i < checkboxes.length; i++) {
    //   if (checkboxes[i].checked) {
    //     atLeastOneChecked = true;
    //     break;
    //   }
    // }

    // if (atLeastOneChecked) {
    //   document.getElementById("myForm").submit();
    // } else {
    //   alert("Please check at least one checkbox.");
    // }
  }

  useEffect(() => {
    validate();
  }, []);

  return [result, setResult];
};

export default useCheckBoxValidator;
