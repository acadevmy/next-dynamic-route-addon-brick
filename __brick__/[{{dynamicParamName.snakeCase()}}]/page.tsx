import { Metadata } from "next";

import { {{pageName.pascalCase()}}PageParamsRoute, {{pageName.pascalCase()}}PageProps } from "@/appTypes/PageProps";
import { getMetadataFromCmsSeo } from "@/utils/metadata";

const fixedListPageFilter = false;

export const generateMetadata = async ({
  params,
}: DynamicPageProps): Promise<Metadata | null> => {
  if (!params.{{dynamicParamName.snakeCase()}}) return null;
  
  return getMetadataFromCmsSeo();
};

export const generateStaticParams = async () => {
  return [] satisfies {{pageName.pascalCase()}}PageParamsRoute[]
};

const {{pageName.pascalCase()}}Page = async ({ params }: {{pageName.pascalCase()}}PageProps) => {
  return (
    <div className="flex justify-center">
      dynamic params: {params.{{dynamicParamName.snakeCase()}}}
    </div>
  );
};

export default {{pageName.pascalCase()}};
