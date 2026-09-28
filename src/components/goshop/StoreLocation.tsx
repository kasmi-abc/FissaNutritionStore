"use client"
import Link from "next/link"
import { useI18n } from "@/i18n/LanguageProvider"
import { IconMapPin, IconInstagram, IconFacebook } from "@/components/Icons"

const MAPS_URL = "https://www.google.com/maps/place/Fissa+nutrition/@36.4668626,2.691279,677m/data=!3m2!1e3!4b1!4m6!3m5!1s0x128f7100754f0d09:0xb57121b9fee8eda1!8m2!3d36.4668626!4d2.691279!16s%2Fg%2F11zjbkfpdz?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D"
const INSTAGRAM_URL = "https://www.instagram.com/fissanutrition/"
const FACEBOOK_URL = "/"
const WHATSAPP_URL = "https://api.whatsapp.com/message/5XS7XWB3YKXNC1?autoload=1&app_absent=0&utm_source=ig"

export function StoreLocation() {
  const { t, d } = useI18n()
  return (
    <section id="location" className="bg-[#1B1E22] py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-[#5DBB63]">
            {d.location.kicker}
          </p>
          <h2 className="section-title mt-2 text-white">{d.location.title}</h2>
          <p className="body-text mt-2 text-white/60">{d.location.sub}</p>
          <p className="mt-4 flex items-center gap-2 text-sm font-bold text-white">
            <IconMapPin className="h-5 w-5 text-[#5DBB63]" />
            {d.location.address}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#5DBB63] px-7 py-3 text-xs font-extrabold tracking-widest text-black transition-all hover:opacity-90 active:scale-95">
              {d.location.directions}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#5DBB63] px-7 py-3 text-xs font-extrabold tracking-widest text-white transition-all hover:bg-[#5DBB63] hover:text-black">
              WhatsApp
            </a>
            <span className="text-xs font-bold text-white/60">{t("footer.followUs")}</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-[#5DBB63] hover:bg-[#5DBB63] hover:text-black">
              <IconInstagram className="h-5 w-5" />
            </a>
            <Link href={FACEBOOK_URL} aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-[#5DBB63] hover:bg-[#5DBB63] hover:text-black">
              <IconFacebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#5DBB63]/30">
          <iframe
            title="Fissa Nutrition map"
            src="https://maps.google.com/maps?q=36.4668626,2.691279&z=17&output=embed"
            className="h-72 w-full border-0 md:h-80"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
