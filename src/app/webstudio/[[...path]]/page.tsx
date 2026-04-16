import WebStudio from "itswebday-webstudio";
import { invokeWebStudioAction } from "../actions";

const WebStudioPage = async ({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) => (
  <WebStudio
    params={params}
    invokeWebStudioAction={invokeWebStudioAction}
    basePath={process.env.NEXT_PUBLIC_WEBSTUDIO_BASE_PATH}
  />
);

export default WebStudioPage;

export { metadata } from "itswebday-webstudio";
