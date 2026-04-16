export const getTenantLocaleConfig = async (): Promise<{
  LOCALES: string[];
  DEFAULT_LOCALE: string;
}> => {
  const tenantSlug = process.env.NEXT_PUBLIC_TENANT_SLUG;

  if (!tenantSlug) {
    throw new Error("NEXT_PUBLIC_TENANT_SLUG is not set.");
  }

  const tenant = await import(`itswebday-webstudio/${tenantSlug}`);

  return { LOCALES: tenant.LOCALES, DEFAULT_LOCALE: tenant.DEFAULT_LOCALE };
};
