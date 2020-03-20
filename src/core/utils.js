export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'กรุณากรอกอีเมล';
  if (!re.test(email)) return 'อีเมลไม่ถูกต้อง';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'กรุณาใส่รหัสผ่าน';

  return '';
};