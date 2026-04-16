/** src/features/contact/components/ContactForm.tsx */
"use client";

import { FieldError } from "@/components/ui/form/FieldError";
import { Input } from "@/components/ui/form/Input";
import { Label } from "@/components/ui/form/Label";
import { Textarea } from "@/components/ui/form/Textarea";
import type { ContactFormValues } from "@/features/contact/schemas/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function buildSchema(t: ReturnType<typeof useTranslations<"contact">>) {
  return z.object({
    name: z.string().min(2, t("errNameMin")),
    email: z.string().email(t("errEmailInvalid")),
    phone: z
      .string()
      .regex(/^[+\d\s\-()]*$/, t("errPhoneInvalid"))
      .optional()
      .or(z.literal("")),
    subject: z.string().min(3, t("errSubjectMin")),
    message: z.string().min(15, t("errMessageMin")),
  });
}

export default function ContactForm() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");
  const schema = buildSchema(t);

  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: ContactFormValues) {
    setSubmitError(null);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error(error);
      setSubmitError(t("formSubmitError"));
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col gap-5 rounded-sm border border-border bg-surface p-8 md:p-10">
        <div className="h-px w-10 bg-accent-warm" />
        <h3 className="text-xl! font-semibold">{t("formSuccessTitle")}</h3>
        <p className="text-sm leading-relaxed text-muted">{t("formSuccessBody")}</p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setSubmitError(null);
          }}
          className="self-start text-xs font-medium uppercase tracking-[0.12em] text-foreground/60 underline-offset-4 transition hover:underline"
        >
          {t("formSendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" required>
            {t("formNameLabel")}
          </Label>
          <Input
            id="name"
            type="text"
            placeholder={t("formNamePlaceholder")}
            autoComplete="name"
            error={!!errors.name}
            {...register("name")}
          />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" required>
            {t("formEmailLabel")}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder={t("formEmailPlaceholder")}
            autoComplete="email"
            error={!!errors.email}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">{t("formPhoneLabel")}</Label>
          <Input
            id="phone"
            type="tel"
            placeholder={t("formPhonePlaceholder")}
            autoComplete="tel"
            error={!!errors.phone}
            {...register("phone")}
          />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="subject" required>
            {t("formSubjectLabel")}
          </Label>
          <Input
            id="subject"
            type="text"
            placeholder={t("formSubjectPlaceholder")}
            error={!!errors.subject}
            {...register("subject")}
          />
          <FieldError id="subject-error" message={errors.subject?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" required>
          {t("formMessageLabel")}
        </Label>
        <Textarea
          id="message"
          rows={6}
          placeholder={t("formMessagePlaceholder")}
          error={!!errors.message}
          {...register("message")}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      {submitError && <p className="text-sm text-red-600">{submitError}</p>}

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? t("formSubmitting") : t("formSubmit")}
          {!isSubmitting && <span aria-hidden="true">→</span>}
        </button>

        <span className="text-xs text-muted">
          {tCommon("requiredFields").replace("*", "")}
          <span className="text-accent-warm">*</span>
        </span>
      </div>
    </form>
  );
}