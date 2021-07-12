import React from 'react';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";

import styles from './SignIn.module.css'

type FormData = {
  githubToken: string
};

const SignIn: React.FC = () => {

  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    const token = data.githubToken;
    localStorage.setItem('token', token);
    router.push('/repositories')
  })

  return (
    <form onSubmit={onSubmit} className={styles.signin_form}>
      <input {...register('githubToken', { required: true })} type="text" placeholder='Github token'/>
      <button className="waves-effect waves-light btn" type='submit' name='submitButton'>Submit</button>
    </form>
  )
}

export default SignIn;
