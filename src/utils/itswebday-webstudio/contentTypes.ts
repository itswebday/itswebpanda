import type { ContentTypeRegistry } from "itswebday-webstudio";

export const getContentTypeRegistry = async (
  slug: string,
): Promise<ContentTypeRegistry> => {
  const tenantSlug = process.env.NEXT_PUBLIC_TENANT_SLUG;

  if (slug !== tenantSlug) {
    throw new Error(
      `This app serves tenant "${tenantSlug}" only. Requested: ${slug}`,
    );
  }

  const tenant = await import(`itswebday-webstudio/${tenantSlug}`);

  return tenant.contentTypeRegistry as ContentTypeRegistry;
};
