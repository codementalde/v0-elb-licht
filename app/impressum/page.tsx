"use client"

import { PageBanner } from "@/components/site/page-banner"
import { LegalSections } from "@/components/site/legal-sections"
import { useI18n } from "@/components/site/i18n-provider"

export default function ImpressumPage() {
  const { t } = useI18n()
  const page = t.legal.imprint

  return (
    <>
      <PageBanner
        imageSrc="/images/banner-contact.jpg"
        imageAlt="Hamburg Speicherstadt"
        eyebrow={page.heroEyebrow}
        title={page.heroTitle}
        lead={page.heroLead}
        breadcrumbs={[
          { href: "/", label: t.nav.home },
          { label: t.common.imprint },
        ]}
      />
      <LegalSections sections={page.sections} />
    </>
  )
}
