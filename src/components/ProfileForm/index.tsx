'use client';
import { Form, Formik } from 'formik';
import { FormField } from '@/components/ProfileForm/FormField';
import { ProfileSchema } from '@/lib/validation';
import { Profile } from '@/types/profile';

interface Props {
  initialValues: Profile;
  onSubmit: (values: Profile) => void;
}

export default function ProfileForm({ initialValues, onSubmit }: Props) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProfileSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto p-6 space-y-4">
          <FormField name="name" label="Name *" placeholder="Your name" />
          <FormField
            name="desiredJobTitle"
            label="Desired Position"
            placeholder="Front-end developer"
          />
          <FormField
            name="about"
            label="About Me"
            placeholder="Tell us a bit about yourself"
            as="textarea"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </Form>
      )}
    </Formik>
  );
}
