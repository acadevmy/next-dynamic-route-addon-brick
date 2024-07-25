import { Metadata } from "next";

import { {{pageName.pascalCase()}}PageParamsRoute, {{pageName.pascalCase()}}PageProps } from "@/appTypes/PageProps";
import { getMetadata } from "@/utils/metadata";

export const generateMetadata = async ({
  params,
}: {{pageName.pascalCase()}}PageProps): Promise<Metadata | null> => {
  if (!params.{{dynamicParamName.snakeCase()}}) return null;

  return getMetadata();
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

export default {{pageName.pascalCase()}}Page;
