'use client';

import { z } from 'zod';
import { FormEvent, useState, useEffect } from 'react';
import styles from './ContactForm.module.css';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
type FormValues = z.infer<typeof formSchema>;
type FormStatus = 'success' | 'error' | 'submitting' | 'idle';

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  useEffect(() => {
    setMounted(true);
  }, []);
  const buttonStatus =
    formStatus === 'submitting'
      ? true
      : formStatus === 'error'
        ? false
        : formStatus === 'success'
          ? false
          : formStatus === 'idle'
            ? false
            : false;

  const buttonText =
    formStatus === 'submitting'
      ? 'Sending...'
      : formStatus === 'error'
        ? 'Oh no...'
        : 'Send message';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const result = formSchema.safeParse(formData);
      if (!result.success) {
        const newErrors: Partial<FormValues> = {};
        result.error.errors.forEach((err) => {
          newErrors[err.path[0] as keyof FormValues] = err.message;
        });

        setErrors(newErrors);
        setFormStatus('idle');
        return;
      }

      // Clear errors if validation passes
      setErrors({});

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Me</h2>

        {!mounted ? (
          <div style={{ minHeight: '400px' }} />
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className={errors.name ? styles.inputError : ''}
              />
              {errors.name && <div className={styles.error}>{errors.name}</div>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className={errors.email ? styles.inputError : ''}
              />
              {errors.email && (
                <div className={styles.error}>{errors.email}</div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                value={formData.subject}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, subject: e.target.value }))
                }
                className={errors.subject ? styles.inputError : ''}
              />
              {errors.subject && (
                <div className={styles.error}>{errors.subject}</div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className={errors.message ? styles.inputError : ''}
              />
              {errors.message && (
                <div className={styles.error}>{errors.message}</div>
              )}
            </div>

            <button
              type="submit"
              disabled={buttonStatus}
              className={styles.submitButton}
            >
              {buttonText}
            </button>

            {formStatus === 'success' && (
              <div className={`${styles.formStatus} ${styles.success}`}>
                Your message was sent successfully!
              </div>
            )}
            {formStatus === 'error' && (
              <div className={`${styles.formStatus} ${styles.error}`}>
                Error sending message. Please try again!
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
