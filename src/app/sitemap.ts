import { renderSitemap } from "itswebday-webstudio/render";
import { getTenantLocaleConfig } from "@/utils/itswebday-webstudio";
import { createSupabaseAnonClient } from "@/utils/supabase/server";

const { LOCALES, DEFAULT_LOCALE } = await getTenantLocaleConfig();

const sitemap = renderSitemap({
  createSupabaseClient: createSupabaseAnonClient,
  tenantSlug: process.env.NEXT_PUBLIC_TENANT_SLUG!,
  baseUrl: process.env.NEXT_PUBLIC_APP_URL!,
  locales: [...LOCALES],
  defaultLocale: DEFAULT_LOCALE,
});

export default sitemap;
