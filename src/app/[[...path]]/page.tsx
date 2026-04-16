import { renderPage } from "itswebday-webstudio/render";
import { getCachedPage, getCachedPagePaths } from "itswebday-webstudio/data";
import {
  getContentTypeRegistry,
  getPageRenderRegistry,
  getSectionRegistry,
  getTenantLocaleConfig,
} from "@/utils/itswebday-webstudio";
import { createSupabaseAnonClient } from "@/utils/supabase/server";

const { LOCALES, DEFAULT_LOCALE } = await getTenantLocaleConfig();

const page = renderPage({
  createSupabaseClient: createSupabaseAnonClient,
  tenantSlug: process.env.NEXT_PUBLIC_TENANT_SLUG!,
  getSectionRegistry,
  getContentTypeRegistry,
  getPageRenderRegistry,
  getCachedPage,
  getCachedPagePaths,
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  baseUrl: process.env.NEXT_PUBLIC_APP_URL!,
});

export default page.default;

export const generateMetadata = async (
  props: Parameters<typeof page.generateMetadata>[0],
) => page.generateMetadata(props);

export const generateStaticParams = async () => page.generateStaticParams();

export const revalidate = 3600;
