import React from 'react';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import styles from './SignIn.module.css'

type FormData = {
  githubToken: string
  githubLogin: string
};

const SignIn: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    localStorage.setItem('token', data.githubToken);
    localStorage.setItem('login', data.githubLogin);
    router.push('/repositories')
  })

  return (
    <form onSubmit={onSubmit} className={styles.signin_form}>
      <input {...register('githubLogin', { required: true })} type="text" placeholder='Github login'/>
      <input {...register('githubToken', { required: true })} type="text" placeholder='Github token'/>
      <button className="waves-effect waves-light btn" type='submit' name='submitButton'>Submit</button>
    </form>
  )
}

export default SignIn;
