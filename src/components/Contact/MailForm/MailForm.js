import { useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import emailjs from '@emailjs/browser';

import classNames from 'classnames/bind';
import styles from './MailForm.module.scss';

const cx = classNames.bind(styles);

function MailForm() {
    const [success, setSuccess] = useState(false);
    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm('snow_0508', 'template_0zshob8', form.current, 'NDCOHZbRdDo87M8-Q').then(
            (result) => {
                form.current.reset();
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            },
        );
    };

    const schema = yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Must be a valid email').required('Email is required'),
        subject: yup.string().required('Subject is required'),
        message: yup.string().required('Message is required'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    // const onSubmit = (data) => console.log(data);

    return (
        <div className={cx('wrapper')}>
            <form ref={form} className={cx('form')} onSubmit={handleSubmit(sendEmail)}>
                <div className={cx('contains')}>
                    <div className={cx('name', 'relative')}>
                        <input
                            type="text"
                            {...register('name', {
                                required: 'Name is required',
                                max: 20,
                            })}
                            className={cx('input')}
                            placeholder="Your Name"
                        />
                        <p className={cx('errors')}>{errors.name?.message}</p>
                    </div>
                    <div className={cx('email', 'relative')}>
                        <input
                            {...register('email', {
                                required: true,
                                max: 50,
                            })}
                            className={cx('input')}
                            placeholder="Your Email"
                        />
                        <p className={cx('errors')}>{errors.email?.message}</p>
                    </div>
                </div>

                <div className={cx('subject', 'relative')}>
                    <input
                        {...register('subject', {
                            required: true,
                            max: 50,
                        })}
                        className={cx('input', 'field')}
                        placeholder="Your Subject"
                    />
                    <p className={cx('errors')}>{errors.subject?.message}</p>
                </div>

                <div className={cx('message-input', 'relative')}>
                    {/* <textarea className={cx('input', 'field', 'message')} placeholder="Your Message"><textarea /> */}
                    <textarea
                        {...register('message', {
                            required: true,
                            max: 200,
                        })}
                        className={cx('input', 'field', 'message')}
                        placeholder="Your Message"
                    ></textarea>
                    <p className={cx('errors')}>{errors.message?.message}</p>
                    <p className={cx(success ? 'success' : 'none')}>Send mail success !</p>
                </div>

                <div className={cx('submit')}>
                    <button className={cx('btn')} type="submit">
                        <div className={cx('hover')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20px" fill="white">
                                <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                            </svg>
                        </div>
                        <div className={cx('btn-name')}>Send Message</div>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default MailForm;
