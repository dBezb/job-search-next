import * as Yup from 'yup';

export const ProfileSchema = Yup.object().shape({
  name: Yup.string().trim().required('Name is required'),
  desiredJobTitle: Yup.string().trim(),
  about: Yup.string().trim(),
});

export const AuthSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters')
    .required('This field is required'),
});
