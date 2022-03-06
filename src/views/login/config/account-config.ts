export const rules = {
  username: [
    {
      required: true,
      message: '账号不能为空',
      trigger: 'blur',
    },
    {
      pattern: /^[0-9]{3}$/,
      message: '账号为6位数字数字',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    },
    {
      pattern: /^[0-9a-z]{3,18}$/,
      message: '密码必须为3-18位字母或是数字',
      trigger: 'blur',
    },
  ],
};
