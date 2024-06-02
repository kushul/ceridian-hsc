import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-dayforce px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div>
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              About us
            </h2>

            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                As a global human capital management (HCM) software company
                whose culture is driven by innovation, Ceridian provides human
                resources, payroll, benefits, workforce management, and talent
                management capabilities in a single solution. Dayforce, its
                flagship cloud HCM platform, enables organisations of all sizes
                to effectively manage the entire lifecycle of employees, from
                recruiting and onboarding, to paying people and developing their
                careers, making it a true global platform to empower people,
                simplify compliance, and unlock workforce intelligence.
              </h3>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
