'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { waitlistFormSchema, WaitlistFormData } from '@/lib/validation';
import { apiClient } from '@/lib/api-client';

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
    position?: number;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistFormSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await apiClient.submitWaitlist(data.email);
      setSubmitStatus({
        type: 'success',
        message: `Success! You're #${result.position || '?'} on the waitlist.`,
        position: result.position,
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to join waitlist. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto space-y-4">
      {/* Email Input */}
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          {...register('email')}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder-gray-400 focus:border-gold focus:outline-none transition"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-crimson text-sm mt-2">{errors.email.message}</p>
        )}
      </div>

      {/* Name Input (Optional) */}
      <div>
        <input
          type="text"
          placeholder="Your name (optional)"
          {...register('name')}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder-gray-400 focus:border-gold focus:outline-none transition"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-crimson text-sm mt-2">{errors.name.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full cta-button disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
      </button>

      {/* Status Messages */}
      {submitStatus && (
        <div
          className={`p-4 rounded-lg text-center ${
            submitStatus.type === 'success'
              ? 'bg-teal/20 border border-teal/50 text-teal'
              : 'bg-crimson/20 border border-crimson/50 text-crimson'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Privacy Notice */}
      <p className="text-xs text-gray-400 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}
