let inputData = "";

const changeInput = () => {
  inputData = document.getElementById("input").value;
};

const submit = () => {
  changeInput();
  if (inputData === '<img src="/admin/notice_flag?userid=admin">') {
    alert("flag : INFO{rhdfyddl shfofmf qnfmftndlTrp gowntpdy}");
  } else {
    alert("oh..no...");
  }
};
// <img src="/admin/notice_flag?userid=admin">
