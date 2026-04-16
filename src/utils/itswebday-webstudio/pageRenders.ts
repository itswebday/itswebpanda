import type { PageRenderRegistry } from "itswebday-webstudio";

export const getPageRenderRegistry = async (
  slug: string,
): Promise<PageRenderRegistry> => {
  const tenantSlug = process.env.NEXT_PUBLIC_TENANT_SLUG;

  if (slug !== tenantSlug) {
    throw new Error(
      `This app serves tenant "${tenantSlug}" only. Requested: ${slug}`,
    );
  }

  const tenant = await import(`itswebday-webstudio/${tenantSlug}`);

  return tenant.pageRenderRegistry as PageRenderRegistry;
};
