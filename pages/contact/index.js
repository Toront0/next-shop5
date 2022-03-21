import styles from '../../styles/Contact.module.css'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { BiErrorCircle } from 'react-icons/bi'
// import dynamic from 'next/dynamic'

// const useForm = dynamic(() => {
//   return import('react-hook-form').then(mod => mod.useForm)
// }, {
  
// })

const ContactPage = () => {
  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <main>
      <Head>
        <title>Contact</title>
        <meta name="description" content="In this page you can find our contacts if you wanted to call us" />
      </Head>
      <section className={`${styles.wrapper} section`}>
        <div className={styles['inner-wrapper']}>
          <h2 className="heading-primary text-center">
          Get in touch  
        </h2>

         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}> 
            <div className={styles['form-item']}>
            <label className={styles.label}>Your Firstname</label>
            <input className={styles.input} type="text" placeholder="Your firstname" {...register('firstName', {
              required: 'This field is required',
              minLength: {
                value: 5,
                message: 'At least 5 characters'
              }
            })}/>
            {errors?.firstName && <ErrorMessage message={errors?.firstName?.message} />}
          </div>
          <div className={styles['form-item']}>
            <label className={styles.label}>Your Lastname</label>
            <input className={styles.input} type="text" placeholder="Your lastname" {...register('lastName', {
              required: 'This field is required',
              minLength: {
                value: 7,
                message: 'At least 7 characters'
              }
            })}/>
            {errors?.lastName && <ErrorMessage message={errors?.lastName?.message} />}
          </div>
          <div className={styles['form-item']}>
            <label className={styles.label}>Your Phone</label>
            <input className={styles.input} type="number" placeholder="Your phone" {...register('phone', {
              required: 'This field is required',
              minLength: {
                value: 12,
                message: 'At least 12 characters'
              }
            })}/>
            {errors?.phone && <ErrorMessage message={errors?.phone?.message} />}
          </div>
          <textarea className={styles.textarea} placeholder='Message' {...register('textArea', {
              required: 'This field is required',
              minLength: {
                value: 30,
                message: 'At least 30 characters'
              }
            })}></textarea>
            {errors?.textArea && <ErrorMessage message={errors?.textArea?.message} />}
          <div>
            <button type='submit' disabled={!isValid} className="primary">Submit</button>
          </div>
         </form>
        </div>
         
         
      </section>
    </main>
  )
}

export default ContactPage


export function ErrorMessage({ message }) {
  return (
    <div className={styles.error}>
      <BiErrorCircle className={styles['error-icon']}/><p>{message || 'Error'}</p>
    </div>
  )
}



